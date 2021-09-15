import React, { useState } from "react";

import '../NewExpense/ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enterTitle, setenterTitle] = useState('');
    const [enteramount, setenterAmount] = useState('');
    const [enterDate, setenterDate] = useState('');
    const titleChangeHandler = (event) => {
        const title = event.target.value;
        setenterTitle(title)

    }
    const amountChangeHandler = (event) => {
        setenterAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setenterDate(event.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enterTitle,
            amount: enteramount,
            date: new Date(enterDate)
        }
        props.onSaveExpenseData(expenseData)
        // console.log(expenseData);
        //clear All input fields
        setenterTitle('');
        setenterAmount('');
        setenterDate('');
    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enterTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteramount} onChange={amountChangeHandler} min='0.01' step='0.01' />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='Date' value={enterDate} onChange={dateChangeHandler} min='2019-01-01' max='2022-12-31' />
            </div>


        </div>
        <div className='new-expense__actions'>
            <button type='submit' >Add Expense</button>

        </div>
    </form>


}
export default ExpenseForm;