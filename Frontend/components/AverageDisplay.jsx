// import React from 'react';

// export const AverageDisplay = (props) => {

//     const total = () => {
//         if (props.puffArray.length) {
//         return props.puffArray.reduce((acc, el) => {
//             acc += Number(el['puffs'])
//             return acc
//         }, 0)
//     } else {
//         return;
//     }
//     }

//     const average = () => {
//         if (props.puffArray.length) {
//             let day = total() / props.puffArray.length;
//             dailyAverage.push(day)
//         }
//         else {
//             return 0;
//         }
//     }



//     return (
//         <div className="display">
//             <h1>Total puff count: {total()}</h1>
//             <h1>Average puff count / day: {average()}</h1>
//         </div>
//     )
// }