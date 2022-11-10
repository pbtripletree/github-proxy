"use strict";

const { test, trait } = use("Test/Suite")("User Controller");

trait("Test/ApiClient");

const username = "octocat";

test("response includes user and their repositories", async ({
  client,
  assert,
}) => {
  const response = await client.get("/users").send({ username }).end();
  response.assertStatus(200);
  assert.equal(response.body.user_name, username);
  response.assertJSONSubset({
    user_name: username,
    repos: [
      {
        name: "test-repo1",
      },
    ],
  });
});
