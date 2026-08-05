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

//TC-01: check style.css
if(fs.existsSync("css/style.css")){
     console.log("TC-02: style.css exists: PASS");
}
else{
    console.log("TC-02: style.css exists: FAIL");
    passed=false;
}

// TC-03:Check script.js
