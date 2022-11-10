"use strict";

const { getUserRepos } = require("../../Utils/github.js");

class UserController {
  async getUser({ request, response }) {
    const { user } = request;
    const username = user.user_name;
    const repos = await getUserRepos(username);
    response.status(200).send({ ...user, repos });
  }
}

module.exports = UserController;
