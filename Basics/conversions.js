//converting into number
let stringNumberValue="33"
let stringStringValue="33qab"
let booleanValue= true
let nanValue= NaN
let unValue
let nullValue= null


let convertedString=Number(stringNumberValue)
console.log(convertedString)

let convertedBadStringValue= Number(stringStringValue)
console.log(convertedBadStringValue)

let convertedBooleanValue= Number(booleanValue)
console.log(convertedBooleanValue)

let convertedNanValue= Number(nanValue);
console.log(convertedNanValue)

let convertedNullValue= Number(nullValue)
console.log(convertedNullValue);

let convertedUnValue= Number(unValue)
console.log(convertedUnValue)

//Number to Boolean 
let numberTrueValue=1
let numberFalseValue=0

let filledStringValue="Rahil "
let emptyStringValue=""

let converted1ToBoolean= Boolean(numberTrueValue)
let converted0ToBoolean= Boolean(numberFalseValue)
let convertedStringToB= Boolean(filledStringValue)
let convertedEmptyStringToB= Boolean(emptyStringValue)

console.log(converted1ToBoolean)
console.log(converted0ToBoolean);
console.log(convertedStringToB);
console.log(convertedEmptyStringToB);
