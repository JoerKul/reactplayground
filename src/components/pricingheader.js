import React from 'react';


export const PricingHeader = () =>{
 return (
    <>
    <header>
        <h1>Our Pricing</h1>
        <div className="toggle">
            <label>Annually </label>
            <div className="toggle-btn">
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label className="sub" id="sub" for="checkbox">
                    <div className="circle"></div>
                </label>
            </div>
            <label> Monthly</label>
        </div>
    </header>
    </>
    );
}

