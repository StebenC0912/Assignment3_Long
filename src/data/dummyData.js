export const Categories = [
    { id: 1, name: 'Food', icon: 'restaurant' },
    { id: 2, name: 'Shopping', icon: 'cart' },
    { id: 3, name: 'Payment' , icon: 'credit-card' },
    { id: 4, name: 'Other', icon: 'list' },
]

export const Transactions = [
    {
        id: 1,
        title: 'Beef Steak',
        amount: 100,
        date: new Date('2021-09-01'),
        category: Categories[0],
        type: 'expense'
    }, 
    {
        id: 2,
        title: 'T-shirt',
        amount: 200,
        date: new Date('2021-09-02'),
        category: Categories[1],
        type: 'expense'
    },
    {
        id: 3,
        title: 'Salary',
        amount: 1000,
        date: new Date('2021-09-03'),
        category: Categories[3],
        type: 'income'
    },
    {
        id: 4,
        title: 'Other',
        amount: 50,
        date: new Date('2021-09-04'),
        category: Categories[3],
        type: 'expense'
    }, 
    {
        id: 5,
        title: 'Beef Steak',
        amount: 100,
        date: new Date('2021-09-05'),
        category: Categories[0],
        type: 'expense'
    }, 
    {
        id: 6,
        title: 'T-shirt',
        amount: 200,
        date: new Date('2021-09-06'),
        category: Categories[1],
        type: 'expense'
    },
    {
        id: 7,
        title: 'Salary',
        amount: 1000,
        date: new Date('2021-09-07'),
        category: Categories[3],
        type: 'income'
    },
    {
        id: 8,
        title: 'Other',
        amount: 50,
        date: new Date('2021-09-08'),
        category: Categories[3],
        type: 'expense'
    }, 
    {
        id: 9,
        title: 'Beef Steak',
        amount: 100,
        date: new Date('2021-09-09'),
        category: Categories[0],
        type: 'expense'
    }, 
    {
        id: 10,
        title: 'T-shirt',
        amount: 200,
        date: new Date('2021-09-10'),
        category: Categories[1],
        type: 'expense'
    },
    {
        id: 11,
        title: 'Salary',
        amount: 1000,
        date: new Date('2021-09-11'),
        category: Categories[3],
        type: 'income'
    },
    {
        id: 12,
        title: 'Other',
        amount: 50,
        date: new Date('2021-09-12'),
        category: Categories[3],
        type: 'expense'
    }
]