"use strict";

const { test, trait } = use("Test/Suite")("User Validator");

trait("Test/ApiClient");

test("username must exist", async ({ client, assert }) => {
  const response = await client
    .get("/users")
    .send({ something_else: "" })
    .end();
  response.assertStatus(400);
  response.assertJSONSubset({
    message: "validation errors",
  });
});

test("username must not be empty", async ({ client, assert }) => {
  const response = await client.get("/users").send({ username: "" }).end();
  response.assertStatus(400);
  response.assertJSONSubset({
    message: "validation errors",
  });
});

test("username must not be more than 100 characters", async ({
  client,
  assert,
}) => {
  const response = await client
    .get("/users")
    .send({
      username:
        "reallylongstringreallylongstringreallylongstringreallylongstringreallylongstringreallylongstringreallylongstringreallylongstring",
    })
    .end();
  response.assertStatus(400);
  response.assertJSONSubset({
    message: "validation errors",
  });
});

test("username must a string", async ({ client, assert }) => {
  const response = await client.get("/users").send({ username: 1 }).end();
  response.assertStatus(400);
  response.assertJSONSubset({
    message: "validation errors",
  });
});
