var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

/* GET Products page. */
router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

/* GET Services page. */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET About page. */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET Contact page. */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

/* GET Login View page */
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login" });
});
module.exports = router;
