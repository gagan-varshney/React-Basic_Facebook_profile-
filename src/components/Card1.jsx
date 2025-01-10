import React, { useState } from "react";

function Card1() {

    const [val, setval] = useState(false)

    return (
        <div className="w-screen h-screen bg-zinc-400 flex justify-center item-center">
            {/* print bahaar jao if val is false and print mat jao if vl is true */}
            <h1>
                {val === false ? "Bahar jao" : "mat Jao"}
                </h1>
                <h1>{val.toString()}</h1>
                <button onClick={()=>{setval(!val)}}
                    className={`h-12 px-3 py-1 text-white text-xs mt-10 ${!val ? "bg-red-500" : "bg-blue-500"} rounded-md`}>Click</button>
        </div>
    )
}

export default Card1;