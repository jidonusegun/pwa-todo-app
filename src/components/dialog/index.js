import React from 'react';

export default function Dialog({title=null, children=null, open, close, proceedButton=null}) {

    const dialog = () => (
        <div>
            <div className="backdrop"></div> 
            <div className="dialog-container">
                <div className="dialog-title-container">
                    <h3>{title}</h3>
                    <button className="close" onClick={() => close(false)}>X</button>
                </div>
                
                <div>{children}</div>
                <div className="footer">
                    <button onClick={proceedButton}>Yes</button>
                    <button onClick={() => close(false)}>No</button>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {open && dialog()}
        </>
    )
}