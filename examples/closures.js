// Method 1
// const createTip = (baseTip) =>{
//     baseTip =`${baseTip/100}`
//     return {
//         getBill(billAmt){
//             const totalTip = baseTip * billAmt
//             return `Your tip amount is: ${totalTip}`
//         }    
//     }
// }


// const calculateTip = createTip(15)
// console.log(calculateTip.getBill(30))

// const calculateTip2 = createTip(5)
// console.log(calculateTip2.getBill(30))

//Method 2
const createTip = (baseTip) =>{
    baseTip =`${baseTip/100}`
    return (billAmt) => {
            const totalTip = baseTip * billAmt
            return `Your tip amount is: ${totalTip}`
        }    
    }


const calculate20 = createTip(16)
console.log(calculate20(25))