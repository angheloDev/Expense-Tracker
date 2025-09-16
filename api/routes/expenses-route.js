import express from 'express';
import { addExpense, getExpenses } from '../controller/expenses-controller.js';

const expensesRouter = express.Router();

expensesRouter.post('/add-expense', addExpense);
expensesRouter.get('/get-expenses', getExpenses);

export default expensesRouter;
