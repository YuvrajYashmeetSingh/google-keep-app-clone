import React from 'react'

const Conents = ({data,id,deleteItems}) => {
    const {title,content}=data
    return (
        <>
         <div className="boxContent">
             <div className="titlebox">{title}</div>
             <div className="contentbox">{content}</div>
             <img 
             src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/48/26e07f/external-delete-miscellaneous-kiranshastry-solid-kiranshastry.png"
              onClick={()=>{deleteItems(id)}}/>
             </div>   
        </>
    )
}

export default Conents
