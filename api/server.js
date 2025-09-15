import express from 'express';
import mongoose from 'mongoose';
import expensesRouter from './routes/expenses-route.js';

const server = express();
const port = process.env.PORT || 5000;
const dbUri = process.env.DB_URI;

server.use(express.json());
server.use('/api/expense', expensesRouter);

mongoose
	.connect(dbUri)
	.then(() => {
		console.log('Database Connected');
		server.listen(port, () => {
			console.log(`Server is up and runnin @ port ${port}. Sheesh!`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
