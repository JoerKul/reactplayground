import React from "react";
import { compareDate } from "./data";
import { Compare } from "./compare";

export const Comparing = () => {
    return ( 
        <>        
        <div className="container"> {compareDate.map((data, key) => {
            return (
                
                    <Compare key={key}
                        title={data.title}
                        icons={data.icons}
                         />
            );
        })}
        </div></>         
    );
};