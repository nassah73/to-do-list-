import React from "react";

export default function Main(){
    
       const [arr,setArr]=React.useState([]);
    const task=arr.map((data)=>{
       return <div>
       <li key={data}>{data}</li>
       <button></button>
       </div>
    })
  
function handel_submet(event){
        event.preventDefault();
         const newitem= new FormData(event.currentTarget)
          const item=newitem.get('taskes')
        setArr([...arr,item])
      
        event.currentTarget.reset()
   }
   
    return(
       <div className="main">
          <form action="" onSubmit={handel_submet}>
            <input type="text" placeholder="task" name="taskes" />
             <button >submet</button>
             <ul>
               {task}
             </ul>
          </form>
           
       </div>
    )
}