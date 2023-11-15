// console.log("Chai aur code");
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

const githubData = {
	login: 'The-Jay-Aher',
	id: 115747060,
	node_id: 'U_kgDOBuYo9A',
	avatar_url: 'https://avatars.githubusercontent.com/u/115747060?v=4',
	gravatar_id: '',
	url: 'https://api.github.com/users/The-Jay-Aher',
	html_url: 'https://github.com/The-Jay-Aher',
	followers_url: 'https://api.github.com/users/The-Jay-Aher/followers',
	following_url: 'https://api.github.com/users/The-Jay-Aher/following{/other_user}',
	gists_url: 'https://api.github.com/users/The-Jay-Aher/gists{/gist_id}',
	starred_url: 'https://api.github.com/users/The-Jay-Aher/starred{/owner}{/repo}',
	subscriptions_url: 'https://api.github.com/users/The-Jay-Aher/subscriptions',
	organizations_url: 'https://api.github.com/users/The-Jay-Aher/orgs',
	repos_url: 'https://api.github.com/users/The-Jay-Aher/repos',
	events_url: 'https://api.github.com/users/The-Jay-Aher/events{/privacy}',
	received_events_url: 'https://api.github.com/users/The-Jay-Aher/received_events',
	type: 'User',
	site_admin: false,
	name: 'Jay Aher',
	company: null,
	blog: '',
	location: 'Thane',
	email: null,
	hireable: true,
	bio: null,
	twitter_username: null,
	public_repos: 21,
	public_gists: 0,
	followers: 0,
	following: 1,
	created_at: '2022-10-13T22:24:32Z',
	updated_at: '2023-11-14T14:47:39Z',
};

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/twitter', (req, res) => {
	res.send('jayaherdotcom');
});

app.get('/github', (req, res) => {
	res.json(githubData);
});

app.get('/login', (req, res) => {
	res.send('<h1>Please login at chai aur code</h1>');
});

app.get('/youtube', (req, res) => {
	res.send('<h2>Chai aur code</h2>');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
