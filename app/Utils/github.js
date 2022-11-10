"use strict";

const { request } = require("./network.js");

const getUser = async (username) => {
  const user = await request(`users/${username}`);
  if (user.message === "Not Found") return null;
  return {
    user_name: user.login,
    display_name: user.name,
    avatar: user.avatar_url,
    geo_location: user.location,
    email: user.email,
    url: user.url,
    created_at: user.created_at.replace("Z", "").replace("T", " "),
  };
};

const getUserRepos = async (username) => {
  const repos = await request(`users/${username}/repos`);
  return repos.map((repo) => ({
    name: repo.name,
    url: repo.html_url,
  }));
};

module.exports = {
  getUser,
  getUserRepos,
};
