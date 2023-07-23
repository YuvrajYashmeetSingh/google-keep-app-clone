import React from 'react'

const Footer = () => {
    let date=new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <h1>Yuvraj Yashmeet Singh</h1>
                <h2>copyright @{date}</h2>
            </div>
        </>
    )
}

export default Footer
 