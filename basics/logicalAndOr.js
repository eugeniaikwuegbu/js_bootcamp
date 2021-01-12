// let temp = 65
 
// if (temp >= 55){
//     if(temp <= 90){
//         console.log('yes!')
//     }
// }


let isGuestOneVegan = false;
let isGuesttwoVegan = false;

if (isGuestOneVegan && isGuesttwoVegan){
    console.log('Only offer vegan dishes')
}else if (isGuestOneVegan || isGuesttwoVegan){
    console.log(`Make sure to offer up some vegan options`)
}else{
    console.log(`Offer up anything on the menu`)
}