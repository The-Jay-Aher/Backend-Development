import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
// 	res.send('Server is ready');
// });

app.get('/api/jokes', (req, res) => {
	const jokes = [
		{
			id: 1,
			title: 'A Joke',
			content: 'This is a joke',
		},
		{
			id: 2,
			title: 'Another Joke',
			content: 'This is another joke',
		},
		{
			id: 3,
			title: 'Third Joke',
			content: 'This is Third joke',
		},
		{
			id: 4,
			title: 'Fourth Joke',
			content: 'This is fourth joke',
		},
		{
			id: 5,
			title: 'Fifth Joke',
			content: 'This is fifth joke',
		},
	];
	res.send(jokes);
});

app.listen(port, (req, res) => {
	console.log(`Serve at http://localhost:${port}`);
});
