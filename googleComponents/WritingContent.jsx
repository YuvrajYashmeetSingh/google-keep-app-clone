import React,{useState} from 'react'
import Conents from "./Conents"
const WritingContent = () => {
    const [state, setstate] = useState({title:"",content:""}) //passing objects 
    const [contents,setcontents]=useState([])
    const{title,content}=state; // destructuring of objects

    const input=(event)=>{

const {name,value}=event.target
setstate((oldvalue)=>{
return {...oldvalue,[name]:value} 

})
    }
//     const addcontent=async(event)=>{
//         setstate({title:"",content:""})
//         if(title!=="" &&content!=="")
//         {event.preventDefault();
// setcontents((badal)=>{return [...badal,state];}) 

// const res= await fetch('',{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         title,content
//     })
// }      );
// const data= await res.json();
// console.log(data)}}

// const deleteItems=(id)=>{
// let updatedlist=contents.filter((array,index)=>{
//     return index!==id
// })
// setcontents(updatedlist);


// }

// const callback=async()=>{
//     try {
//         const res=await fetch('',{
//             method:"GET",
//             headers:{
//                 Accept:"application.json",
//                 "Content-Type":"application/json"
//             }
//         })
//         const data=await res.json();
//     } catch (error) {
        
//     }
// }
const clearall=()=>{
    setstate({title:"",content:""})
}

    return (
        <>
        {/* maincontainer */}
          <div className="mainContainer">
           <form >
      <input className="input" type="text" placeholder="Title" name="title" onChange={input} value={title}/>     
          <textarea name="content" className="content" placeholder="Write a note" cols="4"  onChange={input} value={content}></textarea>
               </form> 
               <img src="https://img.icons8.com/ios-glyphs/30/26e07f/refresh--v1.png" className="refresh"
            onClick={clearall}   />
                           <button onClick={addcontent}>+</button>

              </div>  
              {/* boxes */}
              <div className="contentBox">

  {  contents.map((curelem,index)=>{
        return ( <Conents  id={index}
        data={curelem}
        deleteItems={deleteItems}/>)
        
    })
}</div>
        </>
    )
}

export default WritingContent
