import React from "react";
import { PricingHeader } from "./pricingheader";
import { PricingCard } from "./pricingcard";
import {cardData} from "../data";




export const Pricing = () => {
    return ( 
        <>        
        
      <div className="pricing">   
      <PricingHeader/>
      <div className="cards">
        
        {cardData.map((data, key) => {
            return (
                <PricingCard key={key}
                    plan={data.plan}
                    price={data.price}
                    license={data.license}
                    period={data.period}
                    button={data.button}
                    chosen={data.chosen}
                    />
            );
        }
        )}
        
      </div>
      </div>

        </>         
    );
};


