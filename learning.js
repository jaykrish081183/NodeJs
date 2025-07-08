var app = require("./app.js");
var data = require("./api_data.js");
// console.log(app.c());


/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = arr.filter((item) => {
  return item > 1 && item < 11 && item % 2 === 0;
})
// Global core modules
console.log(result); // [2, 4, 6, 8, 10] */

/* // Non-global core modules
var FileSystem = require('fs');
FileSystem.writeFileSync('output.txt', 'Hello, World! This is a test file.');
console.log(__dirname);
console.log(__filename); */

/* const http = require('http');
const server = http.createServer((req,res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, This is a my first node.js server \n');
}); */

/* const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
}); */

// const http = require('http');
// http.createServer((req,res) => {
//     res.write("Hello I am Jayesh Patel");
//     res.end();
// }).listen(4500);

/* const dataController = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, This is a my first node.js server \n');
}
const http = require('http');
http.createServer(dataController).listen(4500); */

/* function dataController(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, This is a my first node.js server \n');
}
 */

/* var colors = require('colors'); 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass */

// const chalk = require('chalk');

/* const http = require("http");
http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  // res.write(JSON.stringify(data));
  res.write(JSON.stringify({name: 'Jayesh Patel',age: 25,city: 'Ahmedabad',country: 'India'}));
  res.end();
})
.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/".green);
}); */

/* const fs = require("fs");
const mode = process.argv[2];
const fileName = process.argv[3];
const fileContent = process.argv[4];

if (mode == "add") {
  console.log("Adding file: " + fileName);
  fs.writeFileSync(fileName, fileContent);
} else if (mode == "remove") {
  console.log("Removing file: " + fileName);
  fs.unlinkSync(fileName);
} else {
  console.log("Invalid mode: " + mode);
} */

/* const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname,'files');

// Create files in the 'files' directory
for (let i = 0; i < 10; i++) {
  fs.writeFileSync(filePath + `/hello${i}.txt`, `This is file number ${i}`);
}

// Read files from the 'files' directory
fs.readdir(filePath, (err, files) => {
  files.forEach(file => {
    fs.readFile(path.join(filePath, file), 'utf8', (err, data) => {
      console.log(`Content of ${file}:`, data);
    });
  });
});

// Remove files after 2 seconds
setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    fs.unlinkSync(filePath + `/hello${i}.txt`);
  }
}, 2000); */

/* const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/test.txt`;

// create file
fs.writeFileSync(filePath, 'This is a test file created in the crud directory.');

// read file
fs.readFile(filePath,'utf8',(err,item)=>{
  console.log(item);
})

// file updated 
fs.appendFile(filePath, ' This is an appended text.', (err) => {
  if (err) throw err;
  console.log('Text has been appended to the file.');
});

// rename file
fs.rename(filePath, `${dirPath}/testing.txt`, (err) => {
  if (err) throw err;
  console.log('File has been renamed to testing.txt');
});

// delete file
fs.unlinkSync(`${dirPath}/testing.txt`);
console.log('File has been deleted successfully.'); */

/* var a=25;
var b=10;
setTimeout(() => {
  var b=25;
}, 2000);

console.log(a+b); // 35 */

/* var a=25;
var b=10;
let delayData = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve(25);
  }, 2000);
})

delayData.then((data)=>{
  b = data;
  console.log(a+b); // 35
}); */

/* const express = require("express");
const app1 = express();
app1.get('', (req, res) => {
  res.send("Welcome, "+ req.query.name + ", <br>This is my home page.");
});
app1.get('/home', (req, res) => {
  res.send("This is my home page.");
});
app1.get('', (req, res) => {
  res.send("Welcome, This is my home page.");
});
app1.get('/about', (req, res) => {
  res.send("Welcome, This is my about page.");
});
app1.get('/help', (req, res) => {
  res.send("Welcome, This is my help page.");
}); */

/* const express = require("express");
const app1 = express();
app1.get('', (req, res) => {
  const name = req.query.name || 'Guest'; // fallback to "Guest"
  res.send(`
    <h1>Welcome, ${name} <br>This is my home page.</h1>
    <a href="/about">ABOUT</a>&nbsp;
    <a href="/help">HELP</a>&nbsp;
    <a href="/api">API</a>`);
});
app1.get('/about', (req, res) => {
  res.send(`<h1>Welcome, This is my ABOUT page.</h1>
    <a href="/">BACK</a>`);
});
app1.get('/help', (req, res) => {
  res.send(`<h1>Welcome, This is my HELP page.</h1>
    <a href="/">BACK</a>`);
});
app1.get('/api', (req, res) => {
  res.send(`<h1>Welcome, This is my API page.</h1>
    ${JSON.stringify(data)} <br>
    <a href="/">BACK</a>`);
  res.json(data);
});
app1.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
}); */


/* const express = require("express");
const path = require('path');
const app1 = express();

const publicPath = path.join(__dirname, 'public');

app1.set('view engine', 'ejs');
// app1.use(express.static(publicPath));

app1.get('', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app1.get('/about', (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app1.get('/help', (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
app1.get('/profile', (req, res) => {
  res.render('profile', { users: data });
});
app1.get('/login', (req, res) => {
  res.render('login');
}); */


/* app1.get('*', (req, res) => {
  res.sendFile(`${publicPath}/nopage.html`);
}); */
/* app1.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
}); */

/* // Applicaton level middleware
const reqFilter = (req, res, next) => {
  if(!req.query.age) {
    return res.send("Please provide age.");
  }else if(req.query.age && req.query.age < 18) {
    console.log("You are not allowed to access this page");
  } else if(req.query.age && req.query.age >= 18) {
    console.log("You are allowed to access this page");
    next();
  } else {
    console.log("Age not provided");
  }
};
app1.use(reqFilter); */

/* // Route level middleware
const reqFilter = require("./middleware.js");
app1.set('view engine', 'ejs');
app1.get('/profile',reqFilter, (req, res) => {
  res.render('profile', { users: data });
});
app1.get('/login', reqFilter, (req, res) => {
  res.render('login');
}); */


/* var app = require("./app.js");
var data = require("./api_data.js");
const express = require("express");
const path = require('path');
const app1 = express();

const publicPath = path.join(__dirname, 'public');
const reqFilter = require("./middleware.js");
const route = express.Router();
route.use(reqFilter);

app1.set('view engine', 'ejs');
route.get('/profile', (req, res) => {
  res.render('profile', { users: data });
});
route.get('/login', (req, res) => {
  res.render('login');
}); 
app1.use('/',route);

app1.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
}); */


/* const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "e-comm";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("products");
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData(); */

/* const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
}); */

/* const dbConnect = require("./mongodb.js");

const main = async () => {
  const data = await dbConnect();
  const result = await data.find({ name: 'Iphone 14' }).toArray();
  if (result.length > 0) {
    console.log(result);
  } else {
    console.log("No records found");
  }   
}

main(); */