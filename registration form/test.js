// const fs= require("fs");
// let passed= true;
// console.log("Registration Test\n");

// //TC-01: check index.html

// if(fs.existsSync("registration form/index.html")){
//     console.log("TC-01: index.html exists: PASS");
//     process.exit(0);
// }
// else{
//     console.log("TC-01: index.html exists: FAIL");
//     passed=false;
//      process.exit(1);
// }

// //TC-02: check style.css
// if(fs.existsSync("registration form/style.css")){
//     console.log("TC-02: style.css exists: PASS");
//     process.exit(0);
// }
// else{
//     console.log("TC-02: style.css exists: FAIL");
//     passed=false;
//     process.exit(1);
// }

// // TC-03:Check script.js
// if (fs.existsSync("registration form/script.js")){
//     console.log("TC-03 : script.js exists :PASS");
//     process.exit(0);
// }
// else{
//     console.log("TC-03 : script.js exists :FAIL");
//     passed=false;
//     process.exit(1);
// }

// //tc4 :
// if (fs.existsSync("registration form/student.json")) {
//     console.log("TC-04: student.json exists: PASS");

//     const data = fs.readFileSync("registration form/student.json", "utf8");

//     // Your JSON tests here
//     process.exit(0);

// } else {
//     console.log("TC-04: student.json exists: FAIL");
//     passed = false;
//     process.exit(1);
// }

// // // TC-05: Name Validation
// // if (fullName !== "") {
// //     console.log("TC-05 Passed: Name is not empty");
// // process.exit(0);
// // } else {
// //     console.log("TC-05 Failed: Name is empty");
// // }

// // // TC-06: 


//chatgpt:
const fs = require("fs");

let passed = true;

console.log("Registration Test\n");

// TC-01: Check index.html

if (fs.existsSync("registration form/index.html")) {
    console.log("TC-01: index.html exists: PASS");
}
else {
    console.log("TC-01: index.html exists: FAIL");
    passed = false;
}


// TC-02: Check style.css

if (fs.existsSync("registration form/style.css")) {
    console.log("TC-02: style.css exists: PASS");
}
else {
    console.log("TC-02: style.css exists: FAIL");
    passed = false;
}


// TC-03: Check script.js

if (fs.existsSync("registration form/script.js")) {
    console.log("TC-03: script.js exists: PASS");
}
else {
    console.log("TC-03: script.js exists: FAIL");
    passed = false;
}


// TC-04: Check student.json

if (fs.existsSync("registration form/student.json")) {
    console.log("TC-04: student.json exists: PASS");

    const data = fs.readFileSync("registration form/student.json", "utf8");

    // Your JSON tests here

}
else {
    console.log("TC-04: student.json exists: FAIL");
    passed = false;
}

// TC-05: Name Validation

const script = fs.readFileSync("registration form/script.js", "utf8");

if (script.includes("fullName.length < 3")) {
    console.log("TC-05: Name validation exists: PASS");
}
else {
    console.log("TC-05: Name validation exists: FAIL");
    passed = false;
}


// TC-06: Email Validation

if (script.includes("emailPattern") && script.includes("emailPattern.test(email)")) {
    console.log("TC-06: Email validation exists: PASS");
}
else {
    console.log("TC-06: Email validation exists: FAIL");
    passed = false;
}