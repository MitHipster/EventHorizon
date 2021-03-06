const router = require("express").Router();
const eventController = require("../../controllers/event");
const reqLogin = require('../../middleware/reqLogin')
const passport = require('passport')

router.route("/")
  .get(eventController.findAll);

router.route("/createEvent/:id")
  .post(reqLogin, eventController.createEvent);

router.route("/userEvents/")
  .post(reqLogin, eventController.findAllByUser);

router.route("/upvote/")
  .post(reqLogin, eventController.upvoteEvent);

router.route("/downvote/")
  .post(reqLogin, eventController.downvoteEvent);

router.route("/unvote")
  .post(reqLogin, eventController.unvoteEvent);

router.route("/attend/")
  .post(reqLogin, eventController.attendEvent);

router.route("/remove")
  .post(reqLogin, eventController.remove);

router.route("/search/")
  .post(eventController.searchEvent);

module.exports = router;
