import React from 'react';

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e5',
        title: 'New Desk (Wooden)',
        amount: 100,
        date: new Date(2022, 5, 12),
    },
    {
        id: 'e6',
        title: 'Groceries',
        amount: 40,
        date: new Date(2022, 2, 11),
    },
    {
        id: 'e7',
        title: 'Apples',
        amount: 15,
        date: new Date(2022, 2, 9),
    },
];

const App = () => {
    return (
        <div>
            <Expenses items={INITIAL_EXPENSES}/>
        </div>
    );
};

export default App;
