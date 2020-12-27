
const knex = require("knex");
const fs = require("fs");
const { Model } = require("objection");
const path = require("path");
const {
  UsersServices,
  UsersStatisticServices
} = require("../db/Models/dbHelpers");
const config = require("./knexfile");
const db = knex(config.development)

Model.knex(db);

const insertToTable = async (data, tableName) => {
  await db(`${tableName}`).insert(data);
};

db.schema
  .hasTable("users")
  .then(function (exists) {
    if (!exists) {
      return db.schema.createTable("users", function (tbl) {
       tbl.increments("id").primary();
       tbl.string("first_name");
       tbl.string("last_name");
       tbl.string("email").notNullable();
       tbl.string("gender");
       tbl.string("ip_address");
      });
    }
  })
    .then(() => {
        fs.readFile(path.join(__dirname, "./users.json"), "utf-8", (err, data) => {
            if (err) console.error(err);
            const userData = JSON.parse(data);
            (async function () {
                const users = await UsersServices.getUsersFromDatabase();
                if (users.length === 0) {
                    userData.forEach((user) => {
                        const {
                            id,
                            first_name,
                            last_name,
                            email,
                            gender,
                            ip_address,
                        } = user;
                        insertToTable(
                            { id, first_name, last_name, email, gender, ip_address },
                            "users"
                        );
                    });
                }
            })()
        }
        );
    }
    )
db.schema
  .hasTable("users_statistic")
  .then(function (exists) {
    if (!exists) {
      return db.schema.createTable("users_statistic", function (tbl) {
       tbl
         .integer("user_id")
         .primary()
         .unsigned()
         .references("id")
         .inTable("users")
         .onDelete("CASCADE")
         .onUpdate("CASCADE");
       tbl.string("date");
       tbl.integer("page_views");
       tbl.integer("clicks");
      });
    }
  })
    .then(() => {
        fs.readFile(path.join(__dirname, "./users_statistic.json"), "utf-8", (err, data) => {
            if (err) console.error(err);
            const parsedStats = JSON.parse(data);
                (async function () {
                    const statistics = await UsersStatisticServices.getAllUsersStatistic();
                    if (statistics.length === 0) {
                        parsedStats.forEach((user) => {
                            const { user_id, date, page_views, clicks } = user;
                            insertToTable(
                                { user_id, date, page_views, clicks },
                                "users_statistic"
                            );
                        });
                    }
                })();
        }
        );
    })
Model.knex(db);

module.exports = db;