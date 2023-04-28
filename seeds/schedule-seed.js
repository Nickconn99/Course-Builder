const { Schedule } = require("../models");

const scheduleData = [
{
   course_name: "Computers and Applications",
   course_id: "CSC 1010",
   professor_name: "William Ford",
   course_credits: 4,
   user_id: 1,
},
{
    course_name: "Principles of Computer Science",
    course_id: "CSC 1301",
    professor_name: "Henry Ford",
    course_credits: 4,
    user_id: 1,
 },
 {
    course_name: "Principles of Computer Science II",
    course_id: "CSC 1302",
    professor_name: "Sam Ford",
    course_credits: 4,
    user_id: 1,
 },
 {
    course_name: "Introduction to Python Programming",
    course_id: "CSC 2301",
    professor_name: "William Garcia",
    course_credits: 4,
    user_id: 1,
 },
 {
    course_name: "Python Programming for Data Science",
    course_id: "CSC 2302",
    professor_name: "Kevin Adams",
    course_credits: 4,
    user_id: 1,
 },
 {
    course_name: "Data Stuctures",
    course_id: "CSC 2720",
    professor_name: "Don Smith",
    course_credits: 4,
    user_id: 1,
 },
 {
    course_name: "System level Programming",
    course_id: "CSC 3320",
    professor_name: "Will Lopez",
    course_credits: 4,
    user_id: 1,
 },
 {
    course_name: "Software Devolpment",
    course_id: "CSC 3350",
    professor_name: "Frank Castillo",
    course_credits: 4,
    user_id: 1,
 },
];
const seedSchedule = () => Schedule.bulkCreate(scheduleData);

module.exports = seedSchedule;
