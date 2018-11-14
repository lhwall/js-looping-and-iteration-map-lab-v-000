// Code your solution in this file.
function lowerCaseDrivers(array){
  const newArray = array.map(function(item) {return item.toLowerCase() })
  return newArray
}

function nameToAttributes(array){
  const newArray = array.map(function(item) {return {firstName: item.split[0], lastName: item.split[1] }})
  return newArray
}
