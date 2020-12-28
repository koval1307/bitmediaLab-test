const { Model } = require("objection");

class UsersServices extends Model {
  static tableName = "users";

  static getUsersFromDatabase() {
    return UsersServices.query();
  }

  static getAllUsers() {
    return UsersServices.query();
  }
 
}


class UsersStatisticServices extends Model {
  static tableName = "users_statistic";

  static getAllUsersStatistic() {
    return UsersStatisticServices.query();
  }

 
}

module.exports = { UsersStatisticServices, UsersServices }


