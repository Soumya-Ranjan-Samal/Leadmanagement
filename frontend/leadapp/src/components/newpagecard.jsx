import '../App.css'

function Important(props){
    if(props.val===true){
        return (
        <><div className="imp text-red-600">!Important</div></>
    )
    }else{
        return (
        <><div className="imp text-white">!vanurtech</div></>
    )
    }
}


function Newpagecard(props) {

    

  return (
    <>
        <div className="rows flex m-2 mt-4">
            <input type="checkbox" className='mx-2 my-3 h-4 w-4' />
            <div className="count rounded-full bg-cyan-500 text-white px-3.5 py-2">
                {props.count}
            </div>
            <div className="names w-[80%] p-1.5 text-slate-700 pl-4 flex justify-between pr-4 border border-slate-300 rounded-full mx-2">
                <span>{props.name}</span><span><Important val={props.important}></Important></span>
            </div>
            <button className='py-2 px-[4%] rounded-full text-white bg-violet-500'>Edit</button>
        </div>
    </>
  )
}

export default Newpagecard;

