const { Router } = require("express");
const { getUsers, getUserStatisticById } = require("./users.controller");


const router = Router();

router.get("/",getUsers);
router.get("/:userId", getUserStatisticById);


module.exports = router;
