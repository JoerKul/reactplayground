import React from "react";
import { PricingHeader } from "./pricingheader";
import { PricingCard } from "./pricingcard";




export const Pricing = () => {
    return ( 
        <>        
        
      <div className="pricing">   
      <PricingHeader/>
      <div className="cards">
        <PricingCard/>
        <div className="card active">
          <ul>
            <li className="pack">Professional</li>
            <li id="professional" className="price bottom-bar">249.99</li>
            <li className="bottom-bar">1 TB Storage</li>
            <li className="bottom-bar">5 Users Allowed</li>
            <li className="bottom-bar">Send up to 10 GB</li>
            <li><button className="btn active-btn">Learn More</button></li>
          </ul>
        </div>
        
      </div>
      </div>

        </>         
    );
};


