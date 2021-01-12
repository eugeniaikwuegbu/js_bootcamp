//Example 1 (using a callback)
// getCountry("MX", (error, countryName) => {
//   error ? console.log(`Error : ${error}`) : console.log(`Country name: ${countryName.name}`)
// })


//Example 2 (using a Promise)
getCountry('MX').then( (countryName) => {
    console.log(`Country name: ${countryName.name}`)
  }).catch( (error) => {
      console.log(error)
  })
  
  
  //Example using fetch
  getLocation().then( (location) =>{
    console.log(`You are in Ikorodu, ${location.region} ${location.country}`)
  }).catch( (error) =>{
    console.log(error)
  })
  
  getCurrentCountry().then((country) =>{
    console.log(`I live in ${country.name}`)
  }).catch((error)=>{
    console.log(error)
  })
  
  //chaining getCountry and getLocation using promise chanining
  // getLocation().then((location)=>{
  //   return getCountry(location.country)
  // }).then((country)=>{
  //   console.log(`You are in Ikorodu, ${country.name}`)
  // }).catch((error) =>{
  //   console.log(error)
  // })
  
  
  
  // if(this.status !== 'playing'){
  //   event.preventDefault()
  //  }