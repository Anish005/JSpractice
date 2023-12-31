//jwt verification
//jwt saves the database call timing and assigning schema for the user name and password
//below is a website which has 2 endpoints one post and one get
//post---/signin --- returns a webtoken with username encrypted 
//get ----/users---- returns an array of all users if user is signed in(token is correct) return 403 status code if not
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456"; //jwt requires a password for the tokenization

const app = express();
app.use(express.json())//to decode the body
const ALL_USERS = [
  //disadvantages of in memory data ---> updates are lost and you have to start from the beginning
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  //can do with find func that arrays provide
  let userExists = false
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (ALL_USERS[i].username===username && ALL_USERS[i].password===password) {
        userExists = true
    }
  }
  
  return userExists
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);//encryptrion done by the jwt.sign()
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization; // expects  the returned token that is stored in the localStorage in the headers(authorization)
  try {
    const decoded = jwt.verify(token, jwtPassword); //verification
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        users: ALL_USERS.filter(function (value) {
          if(value.username == username){
            return false
          }else{
            return true
          }
            
        })
    })
  } catch (err) { // dont go to the error middlewares just catch it here
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)