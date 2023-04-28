const sequelize = require("../config/connection");

const seedUser = require("./user-seed");
const seedPlanner = require("./planner-seed");
const chalk = require("chalk")

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log(chalk.magenta("\n----- DATABASE SYNCED -----\n"));

  await seedUser();
  console.log(chalk.magenta("\n----- USERS SEEDED -----\n"));

  await seedPlanner();
  console.log(chalk.magenta("\n----- COURSES SEEDED -----\n"));

  process.exit(0);
};

seedAll();
