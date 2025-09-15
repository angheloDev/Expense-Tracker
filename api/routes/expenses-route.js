import express from 'express';
import { addExpense } from '../controller/expenses-controller.js';

const expensesRouter = express.Router();

expensesRouter.post('/add-expense', addExpense);

export default expensesRouter;
