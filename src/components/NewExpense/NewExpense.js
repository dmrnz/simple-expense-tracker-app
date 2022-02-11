import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openFormHandler = () => {
        setIsOpen(true);
    };

    const closeFormHandler = () => {
        setIsOpen(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpense({
            id: Math.random().toString(),
            ...enteredExpenseData,
        });
        closeFormHandler();
    };

    return (
        <div className='new-expense'>
            {isOpen ?
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={closeFormHandler}
                />
                :
                <button onClick={openFormHandler}>Add New Expense</button>
            }
        </div>
    );
};

export default NewExpense;
