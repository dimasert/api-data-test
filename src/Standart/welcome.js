import React from 'react';
import './welcome.css';

const Welcome = (props) => {
    const date = new Date()
    const hour = date.getHours()
    let timeOfDay;
    let classNameValue;
    const display = true;

    if (hour < 12) {
        timeOfDay = 'morning'
        classNameValue = 'morning'
    } else if (hour > 12 && hour <= 17){
        timeOfDay = 'afternoon'
        classNameValue = 'afternoon'
    } else {
        timeOfDay = 'Night'
        classNameValue = 'night'
    }

    return(
        <div>
            <h2>welcome, {props.firstName} {props.lastName}</h2>

           {
               display ? 
               <p className={classNameValue}> Good {timeOfDay} !</p> :
               null
           }
        </div>
    )
}
export default Welcome