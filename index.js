require('dotenv').config()

const express = require('express')
const app = express()

const githubData = {
    "login": "mazorvion",
    "id": 79722477,
    "node_id": "MDQ6VXNlcjc5NzIyNDc3",
    "avatar_url": "https://avatars.githubusercontent.com/u/79722477?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mazorvion",
    "html_url": "https://github.com/mazorvion",
    "followers_url": "https://api.github.com/users/mazorvion/followers",
    "following_url": "https://api.github.com/users/mazorvion/following{/other_user}",
    "gists_url": "https://api.github.com/users/mazorvion/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mazorvion/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mazorvion/subscriptions",
    "organizations_url": "https://api.github.com/users/mazorvion/orgs",
    "repos_url": "https://api.github.com/users/mazorvion/repos",
    "events_url": "https://api.github.com/users/mazorvion/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mazorvion/received_events",
    "type": "User",
    "site_admin": false,
    "name": "vikas",
    "company": null,
    "blog": "",
    "location": "india",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 2,
    "following": 0,
    "created_at": "2021-02-26T20:10:32Z",
    "updated_at": "2023-12-27T17:05:09Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send("twitter page")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get("/other", (req, res) => {
    res.send("<h2>nice<h2/>")
})

app.listen(process.env.PORT, () => {
    console.log('App is listening on port ' + process.env.PORT)
})