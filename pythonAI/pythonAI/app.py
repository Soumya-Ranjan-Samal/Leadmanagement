import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

# Generate Dummy Data
np.random.seed(42)
data = {
    "teamsize": np.random.randint(2, 15, 100),
    "complexity": np.random.randint(1, 10, 100),
    "experience": np.random.randint(1, 10, 100),  # Represents avg years of experience
    "pastprojectcount": np.random.randint(0, 20, 100),
}
df = pd.DataFrame(data)

# Splitting Data
X = df[["teamsize", "complexity", "experience", "pastprojectcount"]]
y_time = np.random.randint(10, 220, 100)  # Dummy target variable

X_train, X_test, y_time_train, y_time_test = train_test_split(X, y_time, test_size=0.2, random_state=42)

# Train Model
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

regressor = LinearRegression()
regressor.fit(X_train_scaled, y_time_train)

# Save Model & Scaler
pickle.dump(regressor, open("time_model.pkl", "wb"))
pickle.dump(scaler, open("scaler.pkl", "wb"))

# Flask API
app = Flask(__name__)
CORS(app)  # Enable CORS to accept requests from MERN frontend

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    teamsize = data.get("teamsize")
    complexity = data.get("complexity")
    experience = data.get("experience")
    pastprojectcount = data.get("pastprojectcount")

    # Check if all fields are provided
    if None in [teamsize, complexity, experience, pastprojectcount]:
        return jsonify({"error": "All fields (teamsize, complexity, experience, pastprojectcount) are required"}), 400

    # Prepare input for prediction
    input_data = np.array([[teamsize, complexity, experience, pastprojectcount]])
    input_data_scaled = scaler.transform(input_data)

    # Predict estimated time
    estimated_time = regressor.predict(input_data_scaled)[0]

    # Additional Computations

    ## 1. *Risk Score* (Higher means riskier)
    risk_score = round(complexity / (experience + 0.5 * (pastprojectcount + 1)), 2)

    ## 2. *Efficiency Index* (Higher means more efficient)
    efficiency_index = round((teamsize * experience) / complexity, 2)

    ## 3. *Estimated Cost* (Assuming $1000 per day)
    estimated_cost = round(estimated_time * 7000, 2)

    ## 4. *Success Index* (Higher means higher probability of success)
    success_index = round((teamsize * experience * pastprojectcount) / complexity, 2)

    ## 5. *Feasibility Check* (Threshold-based)
    feasibility = "Feasible" if estimated_time <= 180 else "Not Feasible"

    return jsonify({
        "estimated_time": round(estimated_time, 2),
        "risk_score": risk_score,
        "efficiency_index": efficiency_index,
        "estimated_cost": estimated_cost,
        "success_index": success_index,
        "feasibility": feasibility
    })

if __name__ == '__main__':
    app.run(debug=True,port=5000)