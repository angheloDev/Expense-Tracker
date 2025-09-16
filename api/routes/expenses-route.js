import express from 'express';
import {
	addExpense,
	deleteExpense,
	getExpenses,
	getTotalExpenses,
} from '../controller/expenses-controller.js';

const expensesRouter = express.Router();

expensesRouter.post('/add-expense', addExpense);
expensesRouter.get('/get-expenses', getExpenses);
expensesRouter.get('/get-total-espenses', getTotalExpenses);
expensesRouter.delete('/delete/:id', deleteExpense);

export default expensesRouter;
