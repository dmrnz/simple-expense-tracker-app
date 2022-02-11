import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpense({
            id: Math.random().toString(),
            ...enteredExpenseData,
        });
    };

    return (
        <div className='new-expense'>
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
            />
        </div>
    );
};

export default NewExpense;
