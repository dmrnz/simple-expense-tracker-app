import React, {useRef} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const titleRef = useRef();
    const amountRef = useRef();
    const dateRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        props.onSaveExpenseData({
            title: titleRef.current.value,
            amount: amountRef.current.value,
            date: new Date(dateRef.current.value),
        });

        titleRef.current.value = '';
        amountRef.current.value = '';
        dateRef.current.value = '';
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        ref={titleRef}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        ref={amountRef}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2016-01-01'
                        max='2023-12-31'
                        ref={dateRef}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
