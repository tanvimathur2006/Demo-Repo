const fs= require("fs");
let passed= true;
console.log("Registration Test\n");

//TC-01: check index.html

if(fs.existsSync("index.html")){
    console.log("TC-01: index.html exists: PASS");
}
else{
    console.log("TC-01: index.html exists: FAIL");
    passed=false;
}

//TC-02: check style.css
if(fs.existsSync("css/style.css")){
     console.log("TC-02: style.css exists: PASS");
}
else{
    console.log("TC-02: style.css exists: FAIL");
    passed=false;
}

// TC-03:Check script.js
if (fs.existsSync("script.js")){
    console.log("TC-03 : script.js exists :PASS");
}
else{
    console.log("TC-03 : script.js exists :FAIL");
    passed=false;
}

//tc4 :
if(fs.existsSync("student.json")){
    console.log("TC-04 : student.json exists :PASS");
}
else{
    console.log("TC-04 : student.json exists :FAIL");
    passed=false;
}

//read json 
const student = JSON.parse(
    fs.readFileSync("student.json")
);


// // TC-05: Name Validation
// if (fullName !== "") {
//     console.log("TC-05 Passed: Name is not empty");
// } else {
//     console.log("TC-05 Failed: Name is empty");
// }

// // TC-06: 

