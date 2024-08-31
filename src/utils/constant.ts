export const weatherChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom' as const,
        },
        title: {
            display: false,
            text: '5-Day Weather Forecast'
        },
    },
    scales: {
        y: {
            grid: {
                display: true
            },
        },
        x: {
            grid: {
                display: true,
            },
        },
    },
};

export const barChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'bottom' as const,
        },
        title: {
            display: false,
            text: 'Company Profit by Quarter',
        },
    },
    scales: {
        y: {
            grid: {
                display: false,
            },
            beginAtZero: true,
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};

export const pieChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: false,
            text: 'Market Share Distribution',
        },
    },
};



export const weatherData = {
    labels: ['10:00', '13:00', '16:00', '19:00', '22:00', '01:00', '04:00'],
    temperatures: [15, 17, 20, 18, 16, 14, 13],
};

export const companyProfitData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    profits: [15000, 25000, 20000, 30000],
};

export const marketShareData = {
    labels: ['Company A', 'Company B', 'Company C', 'Company D'],
    shares: [30, 25, 20, 25],
};

export const tableData = [
    { id: 1, name: 'John Doe', age: 28, position: 'Software Engineer', salary: '$120,000' },
    { id: 2, name: 'Jane Smith', age: 32, position: 'Project Manager', salary: '$135,000' },
    { id: 3, name: 'Sam Green', age: 24, position: 'UI/UX Designer', salary: '$95,000' },
    { id: 4, name: 'Alice Johnson', age: 30, position: 'Data Scientist', salary: '$150,000' },
    { id: 5, name: 'Robert Brown', age: 27, position: 'DevOps Engineer', salary: '$110,000' },
];

export const settingsConfig = [
    { name: "showWeatherChart", label: "Show Weather Chart" },
    { name: "showCompanyChart", label: "Show Company Chart" },
    { name: "showMarketShareChart", label: "Show Market Share Chart" },
    { name: "showTable", label: "Show Table" },
];