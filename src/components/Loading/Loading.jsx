import React from 'react'
import "./Loading.css"

const Loading = () => {
    return(
        <>
            <div className="loading">
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
