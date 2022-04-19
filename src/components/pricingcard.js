import React from 'react';


export const PricingCard = () =>{
 return (
    <>
    <div className="card shadow">
          <ul>
            <li className="pack">Free trail</li>
            <li id="basic" className="price bottom-bar">0.00</li>
            <li className="bottom-bar">500 GB Storage</li>
            <li className="bottom-bar">2 Users Allowed</li>
            <li className="bottom-bar">Send up to 3 GB</li>
            <li><button className="btn">Learn More</button></li>
          </ul>
        </div>
    </>
    );
}
