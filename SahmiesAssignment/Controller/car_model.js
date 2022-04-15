const pool = require("../model/index");
const car_modelController = {};

car_modelController.getAllPosts = function (req, res, next) {
  // get all posts from database
  pool.query("SELECT * FROM Okunola", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("car_model", { car_modelPosts: results.rows });
  });
};

car_modelController.createAPost = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer ;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;



  pool.query(
    `INSERT INTO Okunola (MANUFACTURER,MODEL,COLOR,YEAR ) VALUES ($1 , $2, $3, $4)`,
    [manufacturer , model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("car_model", { car_modelPosts: [] });
    }
  );
};

car_modelController.deleteAPost = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    "DELETE FROM Okunola WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/car_model");
    }
  );
};

car_modelController.editAPost = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM Okunola WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("car_modelEdit", { car_modelPost: results.rows[0] });
    }
  );
};


car_modelController.updateAPost = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;
  
  pool.query(
    "UPDATE Okunola SET manufacturer = $1, model = $2, color = $3,year = $4 WHERE id = $5",
    [manufacturer , model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/car_model");
    }
  );
};


module.exports = car_modelController;