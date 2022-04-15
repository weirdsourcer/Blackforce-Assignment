var express = require("express");
var router = express.Router();

var car_modelController = require("../controller/car_model");
/* GET home page. */
router.get("/", car_modelController.getAllPosts);


router.post("/", car_modelController.createAPost);

router.get("/:id/delete", car_modelController.deleteAPost);

// get record details
router.get("/:id/edit", car_modelController.editAPost);

// update record
router.post("/:id/edit", car_modelController.updateAPost);

// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update
// router.post("/", blogController.createAPost);

// get post delete

module.exports = router;