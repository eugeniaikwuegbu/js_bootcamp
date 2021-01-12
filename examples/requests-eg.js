//Method 1 using callbacks
// getCountry = (countryCode, callback) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', function (e){
//       if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         const countryData = data.find( (country) => country.alpha2Code === countryCode)
//         callback(undefined, countryData) 
//       }else if(e.target.readyState === 4){
//           callback(`An Error Occured`)
//       }
//     })
    
//     request.open('GET', `http://restcountries.eu/rest/v2/all?alpha2Code=${countryCode}`)
//     request.send()
    
// }


//Method 2 using Promises
// getCountry = (countryCode) => new Promise( (resolve, reject) =>{
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', function (e){
//       if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         const countryData = data.find( (country) => country.alpha2Code === countryCode)
//         resolve(countryData)
//       }else if(e.target.readyState === 4){
//         reject(`An Error Occured`)
//       }
//     })
    
//     request.open('GET', `http://restcountries.eu/rest/v2/all?alpha2Code=${countryCode}`)
//     request.send()
// })


//Method 3 using fetch API
// getCountry = (countryCode) => {
//   return fetch(`http://restcountries.eu/rest/v2/all?alpha2Code=${countryCode}`).then ((response) => {
//     if(response.status === 200){
//       return response.json()// returns our output in json format
//     }else{
//       throw new Error('Cannot fetch country')
//     }
//   }).then( (country) =>{ //this is the response that will be returned in json format
//     return country.find((country) => country.alpha2Code === countryCode)
//   })
// }

//Example using fetch
// const getLocation = () =>{
//   return fetch(`http://ipinfo.io/json?token=b0bc496fcdd09a`).then((response) =>{
//     if(response.status === 200){
//       return response.json()
//     }else{
//       throw new Error('Cannot fetch location')
//     }
//   }).then( (location) =>{
//     return location
//   })
// }

//using async await on getCountry
getCountry = async(countryCode) => {
    const countryInfo = await fetch(`http://restcountries.eu/rest/v2/all?alpha2Code=${countryCode}`)
      if(countryInfo.status === 200){
        let data = await countryInfo.json()// returns our output in json format
        return data.find((country) => country.alpha2Code === countryCode)
      }else{
        throw new Error('Cannot fetch country')
      }
  }
  
  
  //using async await on getLocation
  const getLocation = async() =>{
    const locationInfo = await fetch(`http://ipinfo.io/json?token=b0bc496fcdd09a`)
    if(locationInfo.status === 200){
      let data = await locationInfo.json()
      return data
      //OR
      // return locationInfo.json()
    }else{
      throw Error('cannot fetch location info')
    }
  }
  
  const getCurrentCountry = async() =>{
    let data = await getLocation()
    let country = await getCountry(data.country)
    return country
    //OR
    // return getCountry(data.country)
  }