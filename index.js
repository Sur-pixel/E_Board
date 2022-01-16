const express = require("express");
const { v4: uuidv4 } = require("uuid");
const sendMail = require("./email");
const http = require("http");
const nodemailer = require("nodemailer");
const fs = require("fs");
const app = express();
const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const mongoose = require("mongoose");
let MONGO_URI =
  "mongodb+srv://hackathon:idk@cluster0.cfrst.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
app.use(express.static("public"));
let db = mongoose.connection;
const kittySchema = new mongoose.Schema({
  email: String,
});

function send_an_email(email, title, message) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chatationinc@gmail.com",
      pass: "Idk_12345",
    },
  });
  var mailOptions = {
    from: "chatationinc@gmail.com",
    to: email,
    subject: title,
    text: message,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

const server = http.createServer(app);
const credentials = mongoose.model("credentials", kittySchema);
const bulletins = mongoose.model("bulletins", kittySchema);
const verfication = mongoose.model("verifications", kittySchema);
const tests = mongoose.model("tests", kittySchema);
//db.collection('tests').insertOne({name:"arman"})
mongoose.connection.on("connected", () => {
  console.log("connected to the database");
});
server.listen(3001, "localhost", async () => console.log("Server started"));

app.use(express.json());
/*app.get("*", async(req, res) =>{


    let url = req.url;
    url = url.substr(1)
verfication.find({verfication_code: url}, (err, result) =>{
db.collection('credentials').updateOne({verified: url}, {$set: {verified: true}}, (err2, result2) =>{
db.collection('verifications').deleteOne({verfication_code: url}, (err3, result3) =>{

    
})
})
})




res.setHeader(
    'Content-type', 'text/html'
)
res.send(`<!DOCTYPE html>
<html>

<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
        @media screen {
            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 400;
                src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 400;
                src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
            }

            @font-face {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 700;
                src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
            }
        }

         CLIENT-SPECIFIC STYLES 
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
        }

        RESET STYLES 
        img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        table {
            border-collapse: collapse !important;
        }

        body {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
        }

        iOS BLUE LINKS 
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

         MOBILE STYLES 
        @media screen and (max-width:600px) {
            h1 {
                font-size: 32px !important;
                line-height: 32px !important;
            }
        }

         ANDROID CENTER FIX 
        div[style*="margin: 16px 0;"] {
            margin: 0 !important;
        }
    </style>
</head>

<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
    <!-- HIDDEN PREHEADER TEXT -->
    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <!-- LOGO -->
        <tr>
            <td bgcolor="#FFA73B" align="center">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#FFA73B" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                            <h1 style="font-size: 48px; font-weight: 400; margin: 2;">Welcome!</h1> <img src=" https://img.icons8.com/clouds/100/000000/handshake.png" width="125" height="120" style="display: block; border: 0px;" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" align="left">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                                        <table border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td align="center" style="border-radius: 3px;" bgcolor="#FFA73B"><a href="#" target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #FFA73B; display: inline-block;">Confirm Account</a></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr> <!-- COPY -->
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 0px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
                        </td>
                    </tr> <!-- COPY -->
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;"><a href="#" target="_blank" style="color: #FFA73B;">https://bit.li.utlddssdstueincx</a></p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <p style="margin: 0;">Cheers,<br>BBB Team</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 30px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#FFECD1" align="center" style="padding: 30px 30px 30px 30px; border-radius: 4px 4px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                            <h2 style="font-size: 20px; font-weight: 400; color: #111111; margin: 0;">Need more help?</h2>
                            <p style="margin: 0;"><a href="#" target="_blank" style="color: #FFA73B;">We&rsquo;re here to help you out</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
                    <tr>
                        <td bgcolor="#f4f4f4" align="left" style="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"> <br>
                            <p style="margin: 0;">If these emails get annoying, please feel free to <a href="#" target="_blank" style="color: #111111; font-weight: 700;">unsubscribe</a>.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>`)
})*/

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/sign-up.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/sign-up", (req, res) => {
  res.sendFile(__dirname + "/public/sign-up.html");
});

app.post("/sign-up", (req, res) => {
  var email1 = req.body.email;
  var psw = req.body.password;
  credentials.find({ email: email1 }, (err, response) => {
    if (err) {
      console.log(err);
    }
    if (response != "[]") {
      const code = uuidv4();
      const data = {
        email: email1,
        password: psw,
        verified: false,
        bulletins: ["default"],
        posts: ["default"],
        content: ["default"],
      };
      db.collection("credentials").insertOne(data);
      fs.writeFileSync(
        `public/confirmation/${code}.html`,
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                Loading...
            </body>
            <script>
                const data = {
                    email: "${email1}",
                    password: "${psw}"
                }
                const send_data = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
                window.onload = function(){
                    fetch("/confirmation", send_data)
                    .then(response=>response.json())
                    .then(function(json){
                        if(Object.values(json)){
                            //confirmation true
                            alert("Success!")
                            window.location.href = "http://localhost:3001/login"
                        } else {
                            alert("Confirmation Failed")
                            alert("Redirecting to Home Page");
                            window.location.href= "http://localhost:3001/login"
                        }
                    })
                }
            </script>
            </html>`
      );
      send_an_email(
        email1,
        "Bulletin Board Confirmation Link",
        `Hello! This link will confirm your email address validity on our databases: http://localhost:3001/confirmation/${code}.html`
      );
    }
  });
  //this code is for email exists check
  // db.collection('credentials').find({email : req.body.email}, (err, result) =>{

  //     if(typeof(result) == Object){

  //         db.collection('verifications').insertOne({

  //             email : req.body.email,
  //             verfication_code: id
  //         })

  //         sendMail.sendMail(req, id)
  //         db.collection('credentials').insertOne({

  //             email: req.body.email,
  //             password: req.body.psw,
  //             verified: id
  //         })
  //     }else{

  //         console.log('email exists')
  //     }
  // })
  /*
    db.collection('verifications').insertOne({

        email : req.body.email, 
        verfication_code: id
    })


    sendMail.sendMail(req, id)
    db.collection('credentials').insertOne({


        email: req.body.email, 
        password: req.body.psw, 
        verified: id,
        logged: false,
    })
   */
});

app.post("/login", (req, res) => {
  var email = req.body.email;
  var psw = req.body.password;
  console.log(psw);
  //reuslt isn't declared here    console.log("a" + result.password)
  db.collection("credentials").findOne({ email: email }, (err, result) => {
    console.log("result: ", result);
    console.log("result.password: ", result.password);

    if (result.password == psw) {
      console.log("password: ", result.password);
      res.json({ status: true, username: email });
    } else {
      res.json({ status: false });
    }
    //  else {
    //     res.json({ status: false })
    // }
  });
});

app.post("/confirmation", (req, res) => {
  var email = req.body.email;
  console.log(email);
  db.collection("credentials").updateOne(
    { email: email },
    { $set: { verified: true } },
    (err, result) => {
      if (err) {
        console.log(err);
        res.json({ status: false });
      } else {
        console.log(result);
        const at_index = email.indexOf("@");
        let email2 = email;

        email = email.slice(0, at_index);
        fs.mkdirSync(`public/${email}`);
        fs.writeFileSync(
          `public/${email}/menu.html`,
          `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <style>
                  #notifications {
                    width: 100%;
                    height: 1000px;
                    background-color: #ffff94;
                    border-width: 3px;
                    border-style: solid;
                    border-radius: 25px;
                  }
                  .dropdown-menu {
                    display: none;
                  }
                </style>
            </head>
            <body>
            <!------ Include the above in your HEAD tag ---------->
            
            <nav id="nav" style="background-color: #343a40;" class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="#">E-Board</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="http://localhost:3001/${email}/menu.html">
                      Home
                      <span class="sr-only">(current)</span>
                      </a>
                  </li>
                  <li class="nav-item">
                    <a style="color: #fff;"class="nav-link" href="http://localhost:3001/${email}/bulletins.html">
                      Bulletins
                    </a>
                  </li>
                  <li class="nav-item">
                    <a style="color: #fff;"class="nav-link" href="http://localhost:3001/${email}/create_bulletin.html">
                      Create Bulletin
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a style="color: #fff;"id="dropdown_btn" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div id="dropdown" style="display:none;" class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Settings</a>
                      <a class="dropdown-item" href="#">Profile</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item"  id = "logoutbtn"href="#">Logout</a>
                    </div>
                  </li>
                </ul>
                <button id="light" type="button" class="btn btn-light">Light</button>
                <button id="dark" type="button" class="btn btn-dark">Dark</button>
            
              </div>
            </nav>
            <h1>Welcome ${email2}!</h1>
            <div id="notifications">
            <p></p>
            </div>
            </body>
            <script>

                          const logoutbtn = document.getElementById('logoutbtn')
                          var nav = document.getElementById("nav");
                          var light_btn = document.getElementById("light");
                          var dark_btn = document.getElementById("dark");
                          light_btn.addEventListener("click", () => {
                            document.body.style.backgroundColor = "#fff";
                            nav.style.backgroundColor = "#fff";
                          })
                          dark_btn.addEventListener("click", () => {
                            document.body.style.backgroundColor = "#000";
                            nav.style.backgroundColor = "#000";
                          })
                          var drop_down_btn = document.getElementById("dropdown_btn");
                          var drop_down = document.getElementById("dropdown");
                          drop_down_btn.addEventListener("click", () => {
                            if (drop_down.style.display === "none"){
                              drop_down.style.display = "block";
                            } else {
                              drop_down.style.display = "none";
                            }
                          })
                
                          logoutbtn.addEventListener('click', ()=>{
                
                window.localStorage.setItem('username', "")
                
                
                          }) 
        //                   setInterval(() =>{
        //                     let url = window.location.href;
        //     let username = window.localStorage.getItem('username')
            
        //     //http://localhost:3001/surtheaagamer12/bulletins.html
        //     url =  url.slice(22, url.length - 11)
        //     username  = username.slice(0, username.indexOf("@"))
        //     alert(username, url)
        //      if(url!= username){
            
        //     window.location.href = 'http://localhost:3001/'
        // }
        //         if(window.localStorage.getItem('username') ==""){
        //         window.location.href = 'http://localhost:3001/'
        //         }
                
        //                   }, 100)
                        </script>
            </html>`
        );

        fs.writeFileSync(
          `public/${email}/create_bulletin.html`,
          `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Create A Bulletin</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                    id="bootstrap-css">
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <style>
                    #notifications {
                        width: 100%;
                        height: 1000px;
                        background-color: #ffff94;
                        border-width: 3px;
                        border-style: solid;
                        border-radius: 25px;
                    }
            
                    #create_div {
                        display: block;
                    }
            
                    #accepted {
                        display: none;
                    }
            
                    .dropdown-menu {
                        display: none;
                    }
                </style>
            </head>
            
            <body>
                <!------ Include the above in your HEAD tag ---------->
            
                <nav id="nav" style="background-color: #343a40;"
                    class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">E-Board</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="http://localhost:3001/${email}/menu.html">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a style="color: #fff;" class="nav-link" href="http://localhost:3001/${email}/bulletins.html">
                                    Bulletins
                                </a>
                            </li>
                            <li class="nav-item">
                    <a style="color: #fff;"class="nav-link" href="http://localhost:3001/${email}/create_bulletin.html">
                      Create Bulletin
                    </a>
                  </li>
                            <li class="nav-item dropdown">
                                <a style="color: #fff;" id="dropdown_btn" class="nav-link dropdown-toggle" href="#"
                                    id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <div id="dropdown" style="display:none;" class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Settings</a>
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                        <button id="light" type="button" class="btn btn-light">Light</button>
                        <button id="dark" type="button" class="btn btn-dark">Dark</button>
            
                    </div>
                </nav>
                <h1>Create A Bulletin</h1>
                <div id="notifications">
                    <div id="create_div">
                    <label>What should your bulletin be called?</label><br>
                    <input id="name" type="text" placeholder="Bulletin Name" autocomplete="off"><br>
                    <label>What should your first post be?</label><br>
                    <input id="title" type="text" placeholder="Post Name" autocomplete="off"><br>
                    <textarea id = "post-content"placeholder="Enter in your post content in less than 250 words." id="body"></textarea>
                    <button id="create">Create Bulletin and Create Post</button>
                    <p id="err"></p>
                    </div>
                    <h1 id="accepted"></h1>
                </div>
            </body>
            <script>
//             setInterval(() =>{
//                 let url = window.location.href;
// let username = window.localStorage.getItem('username')

// //http://localhost:3001/surtheaagamer12/bulletins.html
// url =  url.slice(22, url.length - 11)
// username  = username.slice(0, username.indexOf("@"))
// alert(username, url)
//  if(url!= username){

// window.location.href = 'http://localhost:3001/'
// }
//     if(window.localStorage.getItem('username') ==""){
//     window.location.href = 'http://localhost:3001/'
//     }
    
//               }, 100)
                            var create_div = document.getElementById("create_div");
                            var accepted = document.getElementById("accepted");
                            var err = document.getElementById("err");
                            var create_btn = document.getElementById("create");
                            var bulletin_name = document.getElementById("name");
                            var post_title = document.getElementById("title");
                            var post_body = document.getElementById("post-content");
                            var nav = document.getElementById("nav");
                            var light_btn = document.getElementById("light");
                            var dark_btn = document.getElementById("dark");
                            light_btn.addEventListener("click", () => {
                                document.body.style.backgroundColor = "#fff";
                                nav.style.backgroundColor = "#fff";
                            })
                            dark_btn.addEventListener("click", () => {
                                document.body.style.backgroundColor = "#000";
                                nav.style.backgroundColor = "#000";
                            })
                            var drop_down_btn = document.getElementById("dropdown_btn");
                            var drop_down = document.getElementById("dropdown");
                            drop_down_btn.addEventListener("click", () => {
                                if (drop_down.style.display === "none") {
                                    drop_down.style.display = "block";
                                } else {
                                    drop_down.style.display = "none";
                                }
                            })
                        
                            create_btn.addEventListener("click", () => {
                                if (bulletin_name.value != "" || bulletin_name.value != undefined || bulletin_name.value != null){
                                    if(post_title.value != "" || post_title.value != undefined|| post_title.value != null){
                                        if (post_body.value != "" || post_body.value != undefined || post_body.value != null){
                                        
                                            const data =  {
                                                name: bulletin_name.value,
                                                email : window.localStorage.getItem('username'), 
                                                post_title: post_title.value,
                                                post_body:post_body.value
                                                
                                            }
                                            const send_data = {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(data)
                                            }
                                            fetch("/create_bulletin", send_data)
                                            .then(response => response.json())
                                            .then(function(json){
                                                if (Object.values(json)){
                                                    //mongo db bulletin added
                                                    const data2 = {
                                                        title: post_title.value,
                                                        message: post_body.value,
                                                        bulletin: bulletin_name.value
                                                    }
                        
                                                    const send_data2 = {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },
                                                        body: JSON.stringify(data2)
                                                    }
                                                    fetch("/create_post", send_data2)
                                                    .then(response => response.json())
                                                    .then(function(json){
                                                        if (Object.values(json)){
                                                            //post created
                                                            create_div.style.display = "none";
                                                            accepted.style.display = "block";
                                                        }
                                                    })
                                                }
                                            })
                                        } else {
                                            err.innerHTML = "Please enter a post body";
                                        }
                                    } else {
                                        err.innerHTML = "Please enter a post title";
                                    }
                                } else { 
                                    err.innerHTML = "Please Enter a bulletin";
                                }
                            })
                        </script>
            
            </html>`
        );
        fs.writeFileSync(
          `public/${email}/bulletins.html`,
          `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                    id="bootstrap-css">
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <style>
                    #notifications {
                        width: 100%;
                        height: 1000px;
                        background-color: #ffff94;
                        border-width: 3px;
                        border-style: solid;
                        border-radius: 25px;
                    }
            
                    .dropdown-menu {
                        display: none;
                    }
                </style>
            </head>
            
            <body>
                <!------ Include the above in your HEAD tag ---------->
            
                <nav id="nav" style="background-color: #343a40;"
                    class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">E-Board</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/test2.html">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a style="color: #fff;" class="nav-link" href="#">
                                    Bulletins
                                </a>
                            </li>
                            <li class="nav-item">
                                <a style="color: #fff;" class="nav-link" href="http://localhost:3001/${email}/create_bulletin.html">
                                    Create Bulletin
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a style="color: #fff;" id="dropdown_btn" class="nav-link dropdown-toggle" href="#"
                                    id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <div id="dropdown" style="display:none;" class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Settings</a>
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                        <button id="light" type="button" class="btn btn-light">Light</button>
                        <button id="dark" type="button" class="btn btn-dark">Dark</button>
            
                    </div>
                </nav>
                <h1>Welcome ${email2}!</h1>
                <div id = 'bulletins-div'>



                </div>
            </body>
            <script>
//            setInterval(() =>{

// let url = window.location.href;
// let username = window.localStorage.getItem('username')

// //http://localhost:3001/surtheaagamer12/bulletins.html
// url =  url.slice(22, url.length - 15 )
// alert(url)
// username  = username.slice(0, username.indexOf("@"))
// if(!String(url).includes(username) == url){

//  window.location.href = 'http://localhost:3001/'
// }
//             }, 100)
             var create_btn =document.getElementById("create_btn"); 
             var nav = document.getElementById("nav");
             var light_btn = document.getElementById("light");
             var dark_btn = document.getElementById("dark");
             const bulletins_div = document.getElementById('bulletins-div');
             light_btn.addEventListener("click", () => {
                 document.body.style.backgroundColor = "#fff";
                 nav.style.backgroundColor = "#fff";
             })
             dark_btn.addEventListener("click", () => {
                 document.body.style.backgroundColor = "#000";
                 nav.style.backgroundColor = "#000";
             })
             var drop_down_btn = document.getElementById("dropdown_btn");
             var drop_down = document.getElementById("dropdown");
             drop_down_btn.addEventListener("click", () => {
                 if (drop_down.style.display === "none") {
                     drop_down.style.display = "block";
                 } else {
                     drop_down.style.display = "none";
                 }
             })
             window.onload = async function(){
                 const data = {
                     admin: window.localStorage.getItem('username'),
                 }
                 const send_data = {
                     method: "POST",
                     headers: {
                         "Content-Type": "application/json"
                     },
                     body: JSON.stringify(data)
                 }
                 let response = await fetch("/load-bulletin", send_data)
                 response = await response.json()
let {bulletins, posts, content} = response.data
console.log(bulletins, posts, content)
let arr = [bulletins, posts, content]
for(const i of bulletins){
 let para = document.createElement('p')
let textNode = document.createTextNode("Bulletin:" + i)

para.appendChild(textNode)
bulletins_div.appendChild(para)
                 


 
}
   
for(const i of posts){
 let para = document.createElement('p')
let textNode = document.createTextNode("Post: " + i)

para.appendChild(textNode)
bulletins_div.appendChild(para)
                 


 
}
for(const i of content){
 let para = document.createElement('p')
let textNode = document.createTextNode("Content: " + i)

para.appendChild(textNode)
bulletins_div.appendChild(para)
                 


 
}
             
             }
         </script>
            
            </html>

            `
        );
        res.json({ status: true });
      }
    }
  );
});

app.post("/create_bulletin", (req, res) => {
  var name = req.body.name;
  var admin = req.body.admin;
  var email = req.body.email;
  let postsreq = req.body.post_title;
  let post_body = req.body.post_body;
  let obj = null;
  console.log(req.body);
  db.collection("credentials").findOne({ email: email }, (e, r) => {
    console.log(r);
    obj = r.bulletins;
    if (obj) {
      obj = [...obj, name];
      let posts = r.posts;
      posts = [...posts, postsreq];
      let content = r.content;
      content = [...content, post_body];
      db.collection("credentials").updateOne(
        { email: email },
        { $set: { bulletins: obj } }
      );
      db.collection("credentials").updateOne(
        { email: email },
        { $set: { posts: posts } }
      );
      db.collection("credentials").updateOne(
        { email: email },
        { $set: { content: content } }
      );
    }
  });
});

//

// db.collection('bulletins').findOne({ name: name }, (e, r) => {
//     console.log('')
//     if (!r) {
//         //name doesn't exist
//         //make one
//         const data = {
//             name: name,
//             admin: admin,
//             posts: 0,
//         }
//         db.collection("bulletins").insertOne(data, (err, response) => {
//             if (err) {
//                 console.log(err);
//                 res.json({ status: false })
//             } else {
//                 console.log(response);
//                 res.json({ status: true })
//                 //Make a collection with bulletin name
//                 mongoose.model(name, kittySchema);
//                 let obj;

//                 credentials.find({ bulletins: name }, (eU, rU) => {

//                     obj = rU
//                 })
//                 db.collection("credentials").updateOne({ bulletins: name }, { bulletins: [...obj, name] })
//             }
//         })
//     }
// })

app.post("/create_post", (req, res) => {
  var title = req.body.title;
  var message = req.body.message;
  var bulletin = req.body.bulletin;
  console.log(bulletin);
  if (!db.collection(bulletin)) {
    var date = new Date();
    var day = date.getDate().toString();
    var month = months[date.getMonth()];
    var date2 = month + " " + day;
    const data = {
      title: title,
      message: message,
      date: date2,
    };
    db.collection(bulletin).insertOne({ data });
    res.json({ status: true });
  } else {
    console.log(`collection doesn't exist`);
    res.json({ status: false });
  }
});

app.post("/load-bulletin", (req, res) => {
  var admin = req.body.admin;
  console.log(admin);
  db.collection("credentials").findOne({ email: admin }, (err2, res2) => {
    console.log(res2);
    let obj = {
      bulletins: res2.bulletins,
      posts: res2.posts,
      content: res2.content,
    };
    res.send({ data: obj });
  });
});
