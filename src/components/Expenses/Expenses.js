import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import ExpenseFilter from '../Expenses/ExpenseFilter';
import '../Expenses/Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const dropdownFilterValue = (filtervalue) => {
        setFilteredYear(filtervalue);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={dropdownFilterValue}
            />

            {props.items.map((expense) => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};
export default Expenses;
