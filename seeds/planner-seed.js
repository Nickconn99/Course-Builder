const { Planner } = require("../models");

const plannerData = [
  {
    name: "MATH 2641|TTh|10:00am - 11:15am|Building B, Room 202",
    user_id: 1,
  },
  {
    name: "MATH 3020|MWF|9:00am - 10:00am|Building C, Room 101",
    user_id: 2,
  },
  {
    name: "CSC 3350|MW|1:00pm - 2:00pm|Building A, Room 301",
    user_id: 3,
  },
  {
    name: "CSC 2720|MWF|10:45am - 12:15pm|Building A, Room 203",
    user_id: 1,
  },
  {
    name: "CSC 3210|TTh|11:30am - 12:45pm|Building C, Room 102",
    user_id: 2,
  },
  {
    name: "CSC 3320|MWF|2:00pm - 3:00pm|Building A, Room 204",
    user_id: 3,
  },
  {
    name: "CSC 4320|TTh|9:30am - 10:45am|Building B, Room 201",
    user_id: 1,
  },
  {
    name: "CSC 4330|MWF|12:30pm - 1:30pm|Building A, Room 201",
    user_id: 2,
  },
  {
    name: "CSC 4520|TTh|1:00pm - 2:15pm|Building C, Room 101",
    user_id: 3,
  },
];
const seedPlanner = () => Planner.bulkCreate(plannerData);

module.exports = seedPlanner;
