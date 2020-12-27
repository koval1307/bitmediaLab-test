// const { usersList, findUserById, usersStatistic } = require("./users.model");
// const knex = require("./../../db/database");
// var _ = require("underscore");
// const { UsersStatisticServices } = require("../../db/Models/dbHelpers");
// const { Model } = require("objection");
// const sumValueByKey = (...rest) =>
//   rest.reduce((result, current) => {
//     for (let key in current) {
//       let value = current[key];

//       if (result[key] === undefined) {
//         result[key] = value;
//       } else {
//         result[key] += value;
//       }
//     }

//     return result;
//   }, {});

// Model.knex(knex);
// exports.getUsers = async (req, res, next) => {
//   knex("users", "users_statistic")
//     .select("*")
//     .then((userData) => {
//       const users = userData;
//       knex("users_statistic")
//         .select("*")
//         .then((userData) => {
//           const stats = userData;

//           const pauser = stats.filter((el) => el.user_id === 1);
//           console.log(pauser);
//           const result22 = pauser.reduce((a, b) => a + b.page_views, 0);
//           const result12 = pauser.reduce((a, b) => a + b.clicks, 0);
//           console.log(
//             result22,
//             result12
//           )(async function () {
//             const res = await UsersStatisticServices.getStatisticForUser(
//               stats.user_id
//             );
//           })();

//           const combineStats = stats.filter((el) => el.user_id === 34);

//           combineStats.reduce;
//           const mergedList = _.map(users, function (item) {
//             console.log(item);
//           });
//           const page = req.query.page;
//           const limit = 50;
//           const startIndex = (page - 1) * limit;
//           const endIndex = page * limit;
//           const result = mergedList.slice(startIndex, endIndex);
//           res.json(mergedList);
//         });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };
// exports.usersCreate = async (req, res, next) => {
//   knex("users")
//     .insert({
//       id: req.id,
//       first_name: req.first_name,
//       last_name: req.last_name,
//       email: req.email,
//       gender: req.gender,
//       ip_address: req.ip_address,
//     })
//     .then(() => {
//       res.json({
//         message: `User \'${req.body.first_name}\' ${req.body.last_name} created.`,
//       });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };

// exports.usersStatisticCreate = async (req, res) => {
//   // Add new user to database
//   knex("users_statistic")
//     .insert({
//       // insert new record, a book
//       user_id: req.user_id,
//       date: req.date,
//       page_views: req.page_views,
//       clicks: req.clicks,
//     })
//     .then(() => {
//       // eslint-disable-next-line no-useless-escape
//       res.json({ message: `User_stat \'${req.user_id}\'created.` });
//     })
//     .catch((err) => {
//       // Send a error message in response
//       console.log(`There was an error creating ${req.user_id} user: ${err}`);
//     });
// };

// exports.getUserStatisticById = async (req, res, next) => {
//   knex("users_statistic")
//     .select("*")
//     .then((userData) => {
//       const queryId = Number(req.params.userId);
//       try {
//         const queryUser = userData.find((el) => el.user_id === queryId);
//         res.json(queryUser);
//       } catch (err) {
//         next(err);
//       }
//     });
// };
