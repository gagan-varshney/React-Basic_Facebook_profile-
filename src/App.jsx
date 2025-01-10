import React, { useState } from "react"
import Card2 from "./components/Card2";

function App() {

  const raw = [
    {name: "john", profession : "Painter", image:  "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Amit", profession : "Artist", image:  "https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ", friends: false},
    {name: "Harsh", profession : "Singer", image:  "https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false},
    {name: "Gagan", profession : "Coder", image:  "https://plus.unsplash.com/premium_photo-1689708385255-fe5ee98674ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false}
  ];

  const [data, setData] = useState(raw);

 
  const HandleClick = (changingIndex)=>{
    setData((prev)=>{
      return prev.map((item, index)=>{
        if(index === changingIndex) return {...item, friends: !item.friends};
        return item;
      })
    })
  }

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
       {data.map((item, index)=>(
        <Card2 key={index} index={index} HandleClick={HandleClick} values={item}/>
       ))}
      </div>
    </>
  )
}


export default App
