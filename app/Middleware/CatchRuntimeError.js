"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CatchRuntimeError {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response }, next) {
    // call next to advance the request
    try {
      await next();
    } catch (e) {
      response.status(500).send({ status: 500, message: e.toString() });
    }
  }
}

module.exports = CatchRuntimeError;
