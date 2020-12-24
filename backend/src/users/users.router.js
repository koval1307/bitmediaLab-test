const { Router } = require("express");
const { getUsers ,getUserById} = require("./users.controller")


const router = Router();

router.get("/",getUsers);
router.get("/:userId", getUserById);


module.exports = router;
