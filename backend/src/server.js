const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path =require("path")
const usersRouter = require("./users/users.router")
require("dotenv").config({ path: path.join(__dirname, ".env") });

exports.CrudServer = class {
  start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  initServer() {
    this.app = express();
  }

  initMiddlewares() {
    this.app.use(express.json());
    this.app.use(morgan("tiny"));
    this.app.use(cors());
  }

  initRoutes() {
    this.app.use("/users",usersRouter) 
  }

  initErrorHandling() {
    this.app.use((err, req, res, next) => {
      const statusCode = err.status || 500;
      return res.status(statusCode).send(err.message);
    });
  }

  startListening() {
    const PORT = process.env.PORT;
    this.app.listen(PORT, () => {
      console.log("Server started listenning on PORT", PORT);
    });
  }
};