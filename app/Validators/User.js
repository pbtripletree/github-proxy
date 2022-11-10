"use strict";

class User {
  get rules() {
    return {
      username: "required|string|max:100|min:1",
    };
  }

  get messages() {
    return {
      "username.required": "'username' must exist in request body",
      "username.string": "'username' must be of type string",
      "username.max": "'username' must not be more than 100 characters",
      "username.min": "'username' must not be empty",
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send({
      status: 400,
      message: "validation errors",
      errors: errorMessages,
    });
  }
}

module.exports = User;
