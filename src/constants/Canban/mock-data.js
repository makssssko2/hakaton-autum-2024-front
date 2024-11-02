const tasksBack = [
    {columnName: 'Новые',
        tasks: [{
            name: 'Выучить устройство АК-47',
            employee: 'Багиров Т.С.',
            date: '17.11.2024',
            priority: 1,
            id: '1'
        },{
            name: 'Выйграть Хакатон',
            employee: 'Гринько М.Д.',
            date: '12.11.2024',
            priority: 2,
            id: '2'
        }, {
            name: 'Сделать бэкенд',
            employee: 'Запара И.А.',
            date: '23.11.2024',
            priority: 1,
            id: '3'
        }, {
            name: 'Сосал ?',
            employee: 'Багиров Т.С.',
            date: '03.10.2024',
            priority: 0,
            id: '4'
        }, {
            name: 'Поспать',
            employee: 'Абдуллаева Д.А.',
            date: '22.08.2024',
            priority: 2,
            id: '5'
        }
        ]
    },
    {columnName: 'В процессе',
        tasks: [{
            name: 'Выучить устройство АК-47',
            employee: 'Багиров Т.С.',
            date: '17.11.2024',
            priority: 1,
            id: '6'
        },{
            name: 'Выйграть Хакатон',
            employee: 'Гринько М.Д.',
            date: '12.11.2024',
            priority: 2,
            id: '7'
        }, {
            name: 'Сделать бэкенд',
            employee: 'Запара И.А.',
            date: '23.11.2024',
            priority: 1,
            id: '8'
        }, {
            name: 'Сосал ?',
            employee: 'Багиров Т.С.',
            date: '03.10.2024',
            priority: 0,
            id: '9'
        }, {
            name: 'Поспать',
            employee: 'Абдуллаева Д.А.',
            date: '22.08.2024',
            priority: 2,
            id: '10'
        }
        ]
    },
    {columnName: 'Завершенные',
        tasks: [{
            name: 'Выучить устройство АК-47',
            employee: 'Багиров Т.С.',
            date: '17.11.2024',
            priority: 1,
            id: '11'
        },{
            name: 'Выйграть Хакатон',
            employee: 'Гринько М.Д.',
            date: '12.11.2024',
            priority: 2,
            id: '12'
        }, {
            name: 'Сделать бэкенд',
            employee: 'Запара И.А.',
            date: '23.11.2024',
            priority: 1,
            id: '13'
        }, {
            name: 'Сосал ?',
            employee: 'Багиров Т.С.',
            date: '03.10.2024',
            priority: 0,
            id: '14'
        }, {
            name: 'Поспать',
            employee: 'Абдуллаева Д.А.',
            date: '22.08.2024',
            priority: 2,
            id: '15'
        }
        ]
    }
];
const tasksWork = [
    {
    name: 'Выйграть Хакатон',
    employee: 'Гринько М.Д.',
    date: '27.10.2024',
    priority: 2,
    id: '2'
}, {
    name: 'Сделать бэкенд',
    employee: 'Запара И.А.',
    date: '27.10.2024',
    priority: 1,
    id: '2'
}, {
    name: 'Сосал ?',
    employee: 'Багиров Т.С.',
    date: '02.08.2024',
    priority: 0,
    id: '2'
}, {
    name: 'Поспать',
    employee: 'Абдуллаева Д.А.',
    date: '10.11.2024',
    priority: 2,
    id: '2'
}
];
const tasksFinish = [
    {
    name: 'Сделать фронтенд',
    employee: 'Гринько М.Д.',
    date: '03.11.2024',
    priority: 1,
    id: '2'
}, {
    name: 'Позавтракать',
    employee: 'Запара И.А.',
    date: '01.10.2024',
    priority: 1,
    id: '2'
}
];

const taskData = {
    description: 'Изучить технические характеристики автомата АК-47, выучить основные составляющие.',
    employee: 'Багиров Т.С.',
    date: '01.08.2024',
    name: 'Выучить устройство АК-47'
}

export {tasksBack,tasksFinish,tasksWork,taskData}