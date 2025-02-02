//Type Conversion

let price = '545';
console.log(price, typeof price); //545 string

//Converting string to number
price = parseInt(price); //using parseInt 
console.log(price, typeof price);//545 number

price = +price //uniary
console.log(price, typeof price);//545 number

price = Number(price);
console.log(price, typeof price);//545 number

// Converting number to string

let code = 2323;
console.log(code, typeof code);//2323 number

code = code.toString();
console.log(code, typeof code);//2323 string

code = String(code);
console.log(code, typeof code);//2323 string


//Boolean to String
let action = false;
// console.log(action, typeof action);//false boolean

// action = action.toString();
// console.log(action, typeof action);//false string


//Boolean to number
action = Number(action);
console.log(action, typeof action);//0 number


//String to Boolean

// let userName = "DFDF";
// console.log(userName, typeof userName); //DFDF string


// userName = Boolean(userName);
// console.log(userName, typeof userName); //true boolean

// userName = !!userName;
// console.log(userName, typeof userName); //true boolean


// let profession = "";
// profession = Boolean(profession);
// console.log(profession, typeof profession); //false boolean


// //Boolean to String

// let state = true;
