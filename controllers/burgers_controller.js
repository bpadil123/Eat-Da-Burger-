var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
      var hbsObject = {
          burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  burger.insertOne(req.body.burger_name, function () {
      res.redirect("/");
  });
});

// Update a burger devoured status.
router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    console.log("Condition: ", condition);
    
    burger.update({ devoured: req.body.devoured }, condition, 
        function (result)  {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});


  module.exports = router;
  