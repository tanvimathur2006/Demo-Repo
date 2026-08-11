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

// TC-07: Mobile Validation

if (script.includes("phonePattern") && script.includes("phonePattern.test(phone)")) {
    console.log("TC-07: Mobile Validation PASS");
} else {
    console.log("TC-07: Mobile Validation FAIL");
    passed = false;
}


// TC-08: Gender Validation

if (script.includes("if (!gender)")) {
    console.log("TC-08: Gender Validation PASS");
} else {
    console.log("TC-08: Gender Validation FAIL");
    passed = false;
}


// TC-09: Password Validation

if (script.includes("password.length < 6")) {
    console.log("TC-09: Password Validation PASS");
} else {
    console.log("TC-09: Password Validation FAIL");
    passed = false;
}


// TC-10: Registration SUCCESS

if (passed) {
    console.log("TC-10: Registration SUCCESS");
    process.exit(0);
} else {
    console.log("TC-10: Registration FAILED");
    process.exit(1);
}

// FINAL RESULT

console.log("\n============================");
console.log("        TEST SUMMARY");
console.log("============================");

if (passed) {
    console.log("All test cases PASSED");
    process.exit(0);
}
else {
    console.log("Some test cases FAILED");
    process.exit(1);
}