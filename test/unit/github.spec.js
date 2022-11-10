"use strict";

const { test } = use("Test/Suite")("Utils Github");
const { getUser, getUserRepos } = require("../../app/Utils/github.js");

const username = "octocat";

test("user returned with expected attributes", async ({ assert }) => {
  const user = await getUser(username);
  process.env.GITHUB_TOKEN
    ? assert.deepEqual(user, {
        user_name: "octocat",
        display_name: "The Octocat",
        avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
        email: "octocat@github.com",
        geo_location: "San Francisco",
        url: "https://api.github.com/users/octocat",
        created_at: "2011-01-25 18:44:36",
      })
    : assert.deepEqual(user, {
        user_name: "octocat",
        display_name: "The Octocat",
        avatar: "https://avatars.githubusercontent.com/u/583231?v=4",
        email: null,
        geo_location: "San Francisco",
        url: "https://api.github.com/users/octocat",
        created_at: "2011-01-25 18:44:36",
      });
});

test("repos returned with expected attributes", async ({ assert }) => {
  const repos = await getUserRepos(username);
  const repo = repos.find((r) => r.name === "test-repo1");
  assert.deepEqual(repo, {
    name: "test-repo1",
    url: "https://github.com/octocat/test-repo1",
  });
});
