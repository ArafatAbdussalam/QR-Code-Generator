import React from 'react'
import "./Loading.css"

const Loading = () => {
    return(
        <>
            <div className="loading">
                <h3 className= "qr-loading-heading">Qr Code Image is generating</h3>
                <div className="loading-items">
                    <span className="item"></span>
                    <span className="item"></span>
                    <span className="item"></span>
                </div>
            </div>
        </>
    )
}

export default Loading;
