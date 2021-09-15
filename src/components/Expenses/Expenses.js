import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import '../Expenses/Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react/cjs/react.development';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const dropdownFilterValue = (filtervalue) => {

        setFilteredYear(filtervalue)
    }
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={dropdownFilterValue} />
            <ExpenseItem
                title={props.item[0].title}
                amount={props.item[0].amount}
                date={props.item[0].date}
            />
            <ExpenseItem
                title={props.item[1].title}
                amount={props.item[1].amount}
                date={props.item[1].date}
            />
            <ExpenseItem
                title={props.item[2].title}
                amount={props.item[2].amount}
                date={props.item[2].date}
            />
            <ExpenseItem
                title={props.item[3].title}
                amount={props.item[3].amount}
                date={props.item[3].date}
            />
        </Card>
    );
}
export default Expenses;
