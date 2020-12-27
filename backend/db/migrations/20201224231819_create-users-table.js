
exports.up = function (knex) {
    knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("users", (tbl) => {
                tbl.increments("id").primary();
                tbl.string("first_name");
                tbl.string("last_name");
                tbl.string("email").notNullable();
                tbl.string("gender");
                tbl.string("ip_address");
            });

        }
    })
    knex.schema.hasTable("users_statistic").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("users_statistic", (tbl) => {
                // Foreign key info to 'users' table
                tbl.integer("user_id").primary()
                    .unsigned()
                    .references('id')
                    .inTable("users")
                    .onDelete("CASCADE")
                    .onUpdate("CASCADE");
                tbl.string("date");
                tbl.integer("page_views");
                tbl.integer("clicks");
            }
                
    
    )
        }
    })
    
    knex
      .select("*")
      .from("users")
      .then((data) => console.log("data:", data.length))
      .catch((err) => console.log(err)); // Export the database
   
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('users_statistic')
};
