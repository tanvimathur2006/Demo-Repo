const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    // Serve index.html
    if (req.method === "GET" && req.url === "/") {

        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {

            if (err) {
                res.writeHead(500);
                res.end("Error loading index.html");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });
    }

    // Serve style.css
    else if (req.method === "GET" && req.url === "/style.css") {

        fs.readFile(path.join(__dirname, "style.css"), (err, data) => {

            if (err) {
                res.writeHead(500);
                res.end("Error loading style.css");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/css"
            });

            res.end(data);
        });
    }

    // Serve script.js
    else if (req.method === "GET" && req.url === "/script.js") {

        fs.readFile(path.join(__dirname, "script.js"), (err, data) => {

            if (err) {
                res.writeHead(500);
                res.end("Error loading script.js");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/javascript"
            });

            res.end(data);
        });
    }

    // Handle registration
    else if (req.method === "POST" && req.url === "/register") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            try {

                const student = JSON.parse(body);

                let students = [];

                // Read existing student.json
                if (fs.existsSync(path.join(__dirname, "student.json"))) {

                    const data = fs.readFileSync(
                        path.join(__dirname, "student.json"),
                        "utf8"
                    );

                    if (data.trim() !== "") {
                        students = JSON.parse(data);
                    }
                }

                // Add new student
                students.push(student);

                // Save updated data
                fs.writeFileSync(
                    path.join(__dirname, "student.json"),
                    JSON.stringify(students, null, 2)
                );

                res.writeHead(200, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Student registered successfully"
                }));

            } catch (error) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Registration failed"
                }));
            }
        });
    }

    // Invalid route
    else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});