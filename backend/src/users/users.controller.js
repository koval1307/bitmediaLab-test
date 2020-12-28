
const knex = require("./../../db/database");
var _ = require("underscore");

exports.getUsers = async (req, res,next) => {
  knex("users", "users_statistic")
    .select("*")
    .then((userData) => {
      const users = userData;
        knex("users_statistic")
          .select("*")
          .then((userData) => {
            const stats = userData;
                     let mergedList = users.map((item) => {
                       let {
                         id,
                         first_name,
                         last_name,
                         email,
                         gender,
                         ip_address,
                       } = item;
                       let { page_views, clicks, date } = stats.reduce(
                         (acc, data) => {
                           if (data.user_id == id) {
                             acc.page_views += data.page_views;
                             acc.clicks += data.clicks;
                               acc.date.push(data.date);
                           }
                           return acc;
                         },
                         { page_views: 0, clicks: 0, date:[] }
                       );
                       return {
                         id,
                         first_name,
                         last_name,
                         email,
                         gender,
                         ip_address,
                         page_views,
                         clicks,
                         date
                       };
                     });
                const page = req.query.page;
                const limit = 50;
                const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const result = mergedList.slice(startIndex, endIndex);
                  res.json(result);
          });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getUserStatisticById = async (req, res, next) => {
   knex("users",)
     .select("*")
     .then((userData) => {
       const users = userData;
       knex("users_statistic")
         .select("*")
         .then((userData) => {
           const stats = userData;
  
          //  let mergedList = users.map((item) => {
          //    let {
          //      id,
          //      first_name,
          //      last_name,
          //      email,
          //      gender,
          //      ip_address,
          //    } = item;
          //    let { page_views, clicks , date } = stats.reduce(
          //      (acc, data) => {
          //        if (data.user_id == id) {
          //          acc.page_views += data.page_views;
          //          acc.clicks += data.clicks;
          //          acc.date.push(data.date)
          //        }
          //        return acc;
          //      },
          //      { page_views: 0, clicks: 0 , date: []}
          //    );
          //    return {
          //      id,
          //      first_name,
          //      last_name,
          //      email,
          //      gender,
          //      ip_address,
          //      page_views,
          //      clicks,
          //      date
          //    };
          //  });
       
                const queryId = Number(req.params.userId);
           const queryUser = stats.filter((el) => el.user_id === queryId);

           res.json(queryUser);
         });
  
     })
     .catch((err) => {
       next(err);
     });
};
