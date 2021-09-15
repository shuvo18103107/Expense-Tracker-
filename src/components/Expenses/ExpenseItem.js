import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from '../Expenses/ExpenseDate';
import '../Expenses/ExpenseItem.css'
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        //calling a state updating function we call again our components for some update
        setTitle('Updated')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}
export default ExpenseItem;
