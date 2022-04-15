const indexController = {};

indexController.getHome = function (req, res, next) {
  // simulate data model
  let pageName = "IndexPage";
  let user = "Okunola";
  let time = new Date().toLocaleDateString();

  res.render("index", { pageName: pageName, user: user, time: time ,title:"car Model"});
};

module.exports = indexController;