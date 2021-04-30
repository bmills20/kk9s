import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/darkly/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route, Link as DomLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Approach from "./Pages/Approach";
import Contact from "./Pages/Contact";
import Partners from "./Pages/Partners";
import Services from "./Pages/Services";

/* var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');


var transport = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if(error){
    console.log("SMTP error: ",error);
  }
  else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: 'braxton25@gmail.com',
    subject: 'new message from contact form',
    text: content
  }
})

transporter.sendMail(mail, (err, data) => {
  if(err) {
    res.json({
      status: 'fail'
    })
  }
  else {
    res.json({
      status: 'success'
    })
  }
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002) */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/pages/approach" component={Approach}></Route>
    </Switch>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Main;