console.log("Hello World!")
console.log("helloooo")
setTimeout(()=>{
    console.log("I', setTimeout!")
},2000);
console.log("end!")
count =1
const id = setInterval(()=>{
    console.log("The id is: " , count)
    count +=1

    if (count ==5){
        console.log("I'm finishing it!!!")
        clearInterval(id);
    }
},1000)

// const os = require("os")
// console.log("Os platform: " , os.platform())
// console.log(os.release())
// console.log(os.totalmem())
// console.log("free memory",  os.freemem())
// console.log("Cpu ", os.cpus())
// console.log("home dir", os.homedir())

// const http = require("http");

// const server = http.createServer((req, res) => {
//     // ✅ Set status and headers correctly
//     res.writeHead(200, { "Content-Type": "text/plain" });

//     // ✅ Send string as response
//     res.write("Hello World!\n");
//     res.write("I'm back..My spark is back!!")
//     // ✅ End response
//     res.end();
// });

// server.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });

const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.send("Hello , Express is running!")
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");

})