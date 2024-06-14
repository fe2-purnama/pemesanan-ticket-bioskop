const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require("cors");
const path = require("path");
const { verifyToken, ensureAdmin } = require('./user/auth/auth.service');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use('/images', express.static(path.join(__dirname, 'image')));


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello World dulu gasih? engga ya");
});
app.use('/admin', verifyToken, ensureAdmin, (req, res) => {
    res.json({ message: 'Welcome to the admin dashboard' });
});

const moviesController = require("./movie/movie.controller");
const registerController = require("./user/register/register.controller");
const loginController = require("./user/auth/auth.controller");
const cinemaRouter = require("./cinema/cinema.controller");
const showRouter = require('./show/show.controller');
const ticketRouter = require('./ticket/ticket.controller');

app.use("/movies", moviesController);
app.use("/register", registerController);
app.use("/auth", loginController);
app.use("/cinemas", cinemaRouter);
app.use("/shows", showRouter);
app.use("/ticket", ticketRouter);


app.listen(PORT, () => {
    console.log("Express API running in port: "+ PORT);
});