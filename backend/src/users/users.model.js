const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");


const usersPath = path.join(__dirname, "../../db/users.json");


async function usersList() {
    const users = await fsp.readFile(usersPath, "utf8")
    return users
};

async function findUserById(userId) {
  const usersData = await fsp.readFile(usersPath, "utf8");
    const users = await JSON.parse(usersData);
  const user = await users.find(
    user => user.id == userId
  );
  return user;
}




module.exports = {
    usersList,
    findUserById
}