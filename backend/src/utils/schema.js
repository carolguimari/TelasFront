const database = require('../database');

const schema = {
	1: `CREATE TABLE IF NOT EXISTS usuarios (
			id INT (11) NOT NULL AUTO_INCREMENT,
			nome VARCHAR (255) NOT NULL,
			email VARCHAR (320) NOT NULL,
			senha VARCHAR (255) NOT NULL,
			deletado TINYINT (1) NOT NULL DEFAULT 0
	);`,
	2: `CREATE TABLE IF NOT EXISTS posts (
			id INT (11) NOT NULL AUTO_INCREMENT,
			id_usuario INT (11) NOT NULL,
			titulo TEXT NOT NULL,
			texto TEXT NOT NULL
	);`,
	3: `CREATE TABLE IF NOT EXISTS comentarios (
		id INT (11) NOT NULL AUTO_INCREMENT,,
        nome VARCHAR (255) NOT NULL,
		email VARCHAR (320) NOT NULL,
        comentario TEXT NOT NULL
	);`,
};

// eslint-disable-next-line no-unused-vars
const drop = async (tableName) => {
	if (tableName) {
		await database.query(`DROP TABLE ${tableName}`);
		console.log('Tabela apagada!');
	}
};

const up = async (number = null) => {
	if (!number) {
		for (const value in schema) {
			// eslint-disable-next-line no-await-in-loop
			await database.query({ text: schema[value] });
		}
	} else {
		await database.query({ text: schema[number] });
	}
	console.log('Migração rodada');
};

up();