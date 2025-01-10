import React from "react";

function card2({values,HandleClick, index}) {
    const {name, image , profession, friends} = values;
    return (
        <div className="w-52 bg-white rounded-md overflow-hidden">
            <div className="w-full h-40 bg-sky-200">
                <img className="w-full h-full object-cover object-[center-top]" src={image} alt="" />
            </div>
            <div className="w-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{profession}</h5>
                <button onClick={()=>HandleClick(index)} className={`px-3 py-1 text-xs text-white ${friends ? "bg-green-500" : "bg-blue-500"} font-semibold mt-3 rounded-md`}>{friends ? "Friends" : "Add Friend"}</button>
                <button className="px-3 py-1 bg-zinc-400 m-3 text-xs text-white rounded-md">Remove</button>
            </div> 
            
        </div>
    )
}

export default card2;