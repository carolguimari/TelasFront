const express = require('express');
const database = require('../backend/src/database');
const app = express();

app.get('/test', (req, res) => {
    res.send('welcome to express');
});

app.post('/blog/post', (req, res) => {
    const {titulo, texto, id} = req.body

    const query = {
		text: `INSERT INTO posts (
			id_usuario,
			titulo,
            texto		
		) VALUES ($1, $2, $3) RETURNING *;`,
		values: [id, titulo, texto],
	};
	const result = await database.query(query);

    return response.status(201).json(result);
})

app.listen(3000);           


