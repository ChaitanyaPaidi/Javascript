// JWT Steps: generate, decode and verify

const jwt = require("jsonwebtoken");

// generate(sign), decode, verify

const value = {
  name: 'Anil Kumar Raju',
  accountNumber: 123456
}

// sign a jwt token
const token = jwt.sign(value, 'secret');
console.log(token);

// this token has been generated usinf this secret, can only be verifed using this secret value 

// your chequebook
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5pbCBLdW1hciBSYWp1IiwiYWNjb3VudE51bWJlciI6MTIzNDU2LCJpYXQiOjE3MDM3NzkxMzd9.N46cTuwTUCoLT0hMe4WFgEaGPgaIwMKo9DRc8acyX8E //

const newToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5pbCBLdW1hciBSYWp1IiwiYWNjb3VudE51bWJlciI6MTIzNDU2LCJpYXQiOjE3MDM3NzkxMzd9.N46cTuwTUCoLT0hMe4WFgEaGPgaIwMKo9DRc8acyX8E","secret");
console.log(newToken);

// o/p: { name: 'Anil Kumar Raju', accountNumber: 123456, iat: 1703779137 }
