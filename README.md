I used Adonis.js as it's my favorite way to compose a Node.js RESTful API. The well defined design paired with an easy to use CLI provides a clear path on how to create a robust web service, and it keeps things clean and readable especially in a pinch.

I like to prepend any controller logic with checks to ensure user input is clean and requested data exists. Here's how the request flows:

1. Validator: before we request a third party service, we want to make sure the data is good to send! If not, we want to be sure to give the API user a clear message of what they need to fix.

2. Middleware: given that we've passed the validator, we can check with our third party to see if the requested entity exists. If so, great, we attach it to the request object so our controller can access the data. If not, we want to alert our API user of the issue.

3. Controller: we have a valid entity to reference, which means we can confidently request more info.

`Utils` is used to isolate functionality needed to do things like request info from third parties. `Models` is a stub for how we'd handle persistence of entities, if we to wanted to store a copy of our third party data in a store of our own.

## Run

Create a .env file in github-proxy root and add the following. The GITHUB_TOKEN is optional, but nice to have if you want a rate limit bump.

(get your token by following these steps: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
APP_KEY=IEtIRR5tWOwetd3ptVj5MOsQmsm4kHh6
GITHUB_URL=https://api.github.com
GITHUB_TOKEN=<your github token>
```

Install the adonis-cli `npm i -g @adonisjs/cli`

Install dependencies `npm install`

Run tests `adonis test`

Launch the dev server! `adonis serve --dev`

Open Postman (or similar), and make a GET request with the following body to `127.0.0.1:3333/users`:

```
{
  "username": "<username here>"
}
```
