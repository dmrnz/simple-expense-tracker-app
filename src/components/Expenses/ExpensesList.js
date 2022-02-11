import React from 'react';

import './ExpensesList.css';

const ExpensesList = (props) =>
    props.items.length === 0 ?
        <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        :
        <ul className='expenses-list'>
            {props.items.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}
        </ul>;

export default ExpensesList;
