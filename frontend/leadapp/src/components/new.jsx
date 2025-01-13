import '../App.css';
import { Link } from 'react-router-dom';
import Newpagecard from './newpagecard';


function Newpage() {
  let count = 1; 
  const clients = [
    { name: "Aarav Gupta", address: "123 Mumbai Street, Mumbai, Maharashtra", phoneNo: "9876543210", status: "follow up", businessType: "retail", clientType: "premium", important: true, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-20", confirmDate: null},
    { name: "Priya Singh", address: "456 Delhi Road, Delhi, Delhi", phoneNo: "8765432109", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Neha Verma", followUpDate: null, confirmDate: null },
    { name: "Rohan Das", address: "789 Kolkata Avenue, Kolkata, West Bengal", phoneNo: "7654321098", status: "interested", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Vikram Patel", followUpDate: "2025-01-15", confirmDate: null  },
    { name: "Simran Kaur", address: "101 Bangalore Boulevard, Bangalore, Karnataka", phoneNo: "6543210987", status: "interested", businessType: "technology", clientType: "premium", important: false, offerBudget: 55000, referredBy: "Sneha Rao", followUpDate: "2025-01-18", confirmDate: null  },
    { name: "Vikram Patel", address: "202 Chennai Lane, Chennai, Tamil Nadu", phoneNo: "5432109876", status: "pending", businessType: "retail", clientType: "standard", important: false, offerBudget: 25000, referredBy: "Aditya Mehta", followUpDate: null, confirmDate: null  },
    { name: "Aditya Mehta", address: "303 Ahmedabad Street, Ahmedabad, Gujarat", phoneNo: "4321098765", status: "pending", businessType: "retail", clientType: "standard", important: true, offerBudget: 40000, referredBy: "Priya Singh", followUpDate: null, confirmDate: null },
    { name: "Neha Verma", address: "404 Jaipur Road, Jaipur, Rajasthan", phoneNo: "3210987654", status: "interested", businessType: "manufacturing", clientType: "premium", important: true, offerBudget: 50000, referredBy: "Rohan Das", followUpDate: "2025-01-12", confirmDate: null  },
    { name: "Karan Sharma", address: "505 Lucknow Lane, Lucknow, Uttar Pradesh", phoneNo: "2109876543", status: "follow up", businessType: "service", clientType: "standard", important: false, offerBudget: 35000, referredBy: "Ananya Roy", followUpDate: "2025-01-22", confirmDate: null },
    { name: "Ananya Roy", address: "606 Chandigarh Boulevard, Chandigarh, Punjab", phoneNo: "1098765432", status: "conform", businessType: "technology", clientType: "premium", important: true, offerBudget: 60000, referredBy: "Isha Kapoor", followUpDate: null, confirmDate: "2025-01-05"  },
    { name: "kIsha Kapoor", address: "707 Bhopal Avenue, Bhopal, Madhya Pradesh", phoneNo: "0198765421", status: "interested", businessType: "retail", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-17", confirmDate: null  },
    { name: "Rajesh Nair", address: "808 Trivandrum Street, Trivandrum, Kerala", phoneNo: "0987654321", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Sneha Rao", followUpDate: null, confirmDate: null  },
    { name: "kSneha Rao", address: "909 Goa Road, Panaji, Goa", phoneNo: "9876501234", status: "follow up", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Rohan Das", followUpDate: "2025-01-21", confirmDate: null  },
    { name: "hAditya Mehta", address: "303 Ahmedabad Street, Ahmedabad, Gujarat", phoneNo: "4321098765", status: "pending", businessType: "retail", clientType: "standard", important: false, offerBudget: 35000, referredBy: "Simran Kaur", followUpDate: null, confirmDate: null },
    { name: "uNeha Verma", address: "404 Jaipur Road, Jaipur, Rajasthan", phoneNo: "3210987654", status: "interested", businessType: "manufacturing", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Vikram Patel", followUpDate: "2025-01-13", confirmDate: null  },
    { name: "pKaran Sharma", address: "505 Lucknow Lane, Lucknow, Uttar Pradesh", phoneNo: "2109876543", status: "follow up", businessType: "service", clientType: "standard", important: true, offerBudget: 40000, referredBy: "Ananya Roy", followUpDate: "2025-01-19", confirmDate: null },
    { name: "kAnanya Roy", address: "606 Chandigarh Boulevard, Chandigarh, Punjab", phoneNo: "1098765432", status: "conform", businessType: "technology", clientType: "premium", important: false, offerBudget: 55000, referredBy: "Isha Kapoor", followUpDate: null, confirmDate: "2025-01-04"  },
    { name: "Isha Kapoor", address: "707 Bhopal Avenue, Bhopal, Madhya Pradesh", phoneNo: "0198765421", status: "interested", businessType: "retail", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-16", confirmDate: null  },
    { name: "kRajesh Nair", address: "808 Trivandrum Street, Trivandrum, Kerala", phoneNo: "0987654321", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Sneha Rao", followUpDate: null, confirmDate: null },
    { name: "Sneha Rao", address: "909 Goa Road, Panaji, Goa", phoneNo: "9876501234", status: "interested", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Rohan Das", followUpDate: "2025-01-14", confirmDate: null  }
];

  return (
    <>
        <div className="home h-[100%] w-[80%] bg-white justify-between items-center shadow-lg shadow-blue-200 m-1 mt-0 rounded-lg">
        <div className="hometop m-2 h-[10%] flex items-center justify-between">
            <div className="heading text-3xl font-bold text-violet-600 ml-4">New</div>
            
            <div className="help ">
                <button className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200' ><Link to="/new/add">Add</Link></button>
                <button className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200' form='deleteMany' >Delete</button>
                <a href="" className='py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200'>?</a>
            </div>
        </div>
        <div className="newdata scrolview h-[90%] border border-slate-200 rounded-2xl m-1 mt-4">
          {/* <form id="deleteMany" action='/new/deleteMany'> */}
        {clients.filter((ob)=>ob.important).map((ob)=>{return <Newpagecard 
                count={count++}
                name={ob.name}
                address={ob.address}
                phoneNo={ob.phoneNo}
                status={ob.status}
                businessType={ob.businessType}
                clientType={ob.clientType}
                important={ob.important}
                offerBudget={ob.offerBudget}
                followUpDate={ob.followUpDate}
                confirmDate={ob.confirmDate}
                referredBy={ob.referredBy}
            ></Newpagecard>})}
            {clients.filter((ob)=>!ob.important).map((ob)=>{return <Newpagecard 
                count={count++}
                name={ob.name}
                address={ob.address}
                phoneNo={ob.phoneNo}
                status={ob.status}
                businessType={ob.businessType}
                clientType={ob.clientType}
                important={ob.important}
                offerBudget={ob.offerBudget}
                followUpDate={ob.followUpDate}
                confirmDate={ob.confirmDate}
                referredBy={ob.referredBy}
            ></Newpagecard>})}
            {/* </form> */}
        </div>
        </div>
    </>
  )
}

export default Newpage

