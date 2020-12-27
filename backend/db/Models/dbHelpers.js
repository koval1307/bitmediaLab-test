const { Model } = require("objection");

class UsersServices extends Model {
  static tableName = "users";

  static getUsersFromDatabase() {
    return UsersServices.query();
  }

  static getAllUsers() {
    return UsersServices.query();
  }
  static getUserById(id) {
    return UsersServices.query().where({ id });
  }
}


class UsersStatisticServices extends Model {
  static tableName = "users_statistic";

  static getAllUsersStatistic() {
    return UsersStatisticServices.query();
  }

  static getStatisticForUser(user_id) {
    return UsersStatisticServices.query().where({ user_id });
  }
}

module.exports = { UsersStatisticServices, UsersServices }


