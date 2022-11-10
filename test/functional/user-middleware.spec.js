"use strict";

const { test, trait } = use("Test/Suite")("User Middleware");

trait("Test/ApiClient");

const username = "notfoundnotfoundnotfound";

test("return 404 if user is not found", async ({ client, assert }) => {
  const response = await client.get("/users").send({ username }).end();
  response.assertStatus(404);
  response.assertJSONSubset({
    message: "not found",
  });
});
