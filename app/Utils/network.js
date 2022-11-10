const fetch = require("node-fetch");

const githubUrl = process.env.GITHUB_URL;
const githubToken = process.env.GITHUB_TOKEN;

const request = async (path) => {
  const res = await fetch(`${githubUrl}/${path}`, {
    ...(githubToken && {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    }),
  });
  return res.json();
};

module.exports = {
  request,
};
