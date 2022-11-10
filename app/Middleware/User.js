"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { getUser } = require("../Utils/github.js");

class User {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response }, next) {
    // call next to advance the request
    const { username } = request.all();
    const user = await getUser(username);
    if (user) {
      request.user = user;
      await next();
    } else {
      response.status(404).send({
        status: 404,
        message: "not found",
      });
    }
  }
}

module.exports = User;
