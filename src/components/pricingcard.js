import React from 'react';


export const PricingCard = ({plan, price, license, period, button, chosen}) =>{
 
    if(chosen){
        return (
            <div className="card active">
              <ul>
                <li className="pack">{plan}</li>
                <li id="professional" className="price bottom-bar">{price}</li>
                <li className="bottom-bar">{license}</li>
                <li className="bottom-bar">{period}</li>                
                <li><button className="btn active-btn">{button}</button></li>
              </ul>
            </div>
        );
    } else {
        return (
    
    <div className="card shadow">
          <ul>
            <li className="pack">{plan}</li>
            <li id="basic" className="price bottom-bar">{price}</li>
            <li className="bottom-bar">{license}</li>
            <li className="bottom-bar">{period}</li>            
            <li><button className="btn">{button}</button></li>
          </ul>
        </div>
    
    );
    }
    
}
