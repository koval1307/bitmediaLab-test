const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");


const usersPath = path.join(__dirname, "../../db/users.json");
const statisticPath = path.join(__dirname,"../db/users_statistic.json")


async function usersList() {
  const users = await fsp.readFile(usersPath, "utf8", (err, data) => {
    if (err) console.error(err);
      const userList = JSON.parse(data);
  })
    return userList
};
async function usersStatistic() {
    const usersStatistic = await fsp.readFile(statisticPath, "utf8")
    return usersStatistic
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
  findUserById,
    usersStatistic
}