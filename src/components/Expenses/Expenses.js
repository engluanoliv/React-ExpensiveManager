import ExpensiveItem from "./ExpensiveItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

import './Expenses.css';


const Expenses = (props) => {

    return (
        // <div>
        <Card className="expenses">
            <ExpensesFilter />
            <ExpensiveItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpensiveItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpensiveItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpensiveItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
        // </div>
    );

}

export default Expenses;