const router = require("express").Router();
const { User, Planner } = require("../models");
const withAuth = require("../utils/auth");
const chalk = require('chalk')
router.get("/", async (req, res) => {
  try {
    const plannerData = await Planner.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },

      ],
    });
    const planners = plannerData.map((planner) =>
      planner.get({ plain: true })
    );
    console.log(chalk.blue((planners)));

    res.render("homepage", {
      planners,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(chalk.red(err));
    res.status(500).json(err);
  }
});

router.get("/planner", async (req, res) => {
  try {
    const userId = req.session.user_id;
    const plannerData = await Planner.findAll({
      where: {
        user_id: userId,
      },
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const planner = plannerData.map((item) => item.get({ plain: true }));

    console.log(chalk.green("planner", planner));


    res.render("planner", {
      planner,
      logged_in: req.session.logged_in,
      userName: req.session.user_name,
    });
  } catch (err) {
    console.log(chalk.red(err));
    res.status(500).json(err);
  }
});

router.get("/search", async (req, res) => {
  try {
    res.render("search", {
      logged_in: req.session.logged_in,
      userName: req.session.user_name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.get("/course", async (req, res) => {
  try {
    res.render("course", {
      logged_in: req.session.logged_in,
      userName: req.session.user_name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/catalog", async (req, res) => {
  try {
    res.render("catalog", {
      logged_in: req.session.logged_in,
      userName: req.session.user_name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/aboutus", async (req, res) => {
  try {
    res.render("aboutus", {
      logged_in: req.session.logged_in,
      userName: req.session.user_name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





router.get("/user", withAuth, async (req, res) => {
  try {

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Palnner }],
    });



    const user = userData.get({ plain: true });

    res.render("homepage", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/user");
    return;
  }
  res.render("login");
});

module.exports = router;
