const { usersList,findUserById } = require("./users.model")

exports.getUsers = async (req, res, next) => {
    try {
        const users = await usersList()
        return res.status(200).send(users)
    }
    catch (err) {
        next(err)
    }
},
    
    exports.getUserById = async (req, res, next) => {
    try {
        const { userId } = req.params;
        console.log(userId)
        const user = await findUserById(userId)
        console.log(user)
        if (!user) {
            return(res.status(204).send({message: "user not found"}))
        }
        return res.status(200).send(user)
    }
    catch (err)
    {
        next(err)
    }
    }
