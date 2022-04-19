import React from "react";
import * as Icons from "react-icons/fa";
import { DynamicFaIcon} from "./dynamicIcon";


export const Compare = ({ title, icons }) => {
    return ( 
        <>        
        <div className="container-item">
            <div className="container-item-title">
                <div> {title}</div>
                
            </div>
            <div className="container-item-icons">
                {icons.map((icon) => {
                    return (<DynamicFaIcon name={icon} />)
                }  
                )}
            </div>
        </div>
        </>         
    );
};