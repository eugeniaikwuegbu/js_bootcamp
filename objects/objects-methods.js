let restaurant = {
    name : 'Tantalizer',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability : function (partySize){
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
        // return `Total number of available seats are ${seatLeft}`
    },
    seatParty : function (partySize){
        let guestSize = this.guestCount += partySize
        if(guestSize > this.guestCapacity){
            return `Exceeded guest capacity`
        } return guestSize;
    },
    removeParty : function(partySize){
        return this.guestCount -= partySize;
    },
}



console.log(restaurant.seatParty(70)) //returns 70
console.log(restaurant.checkAvailability(10)) //returns false
console.log(restaurant.removeParty(10)) //returns 60
console.log(restaurant.checkAvailability(10))//true

