import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// const salaries1 = {
//   Manager: { salary: 1000, tax: '10%' },
//   Designer: { salary: 600, tax: '30%' },
//   Artist: { salary: 1500, tax: '15%' },
// };

// const team1 = [
//   { name: 'Misha', specialization: 'Manager' },
//   { name: 'Max', specialization: 'Designer' },
//   { name: 'Vova', specialization: 'Designer' },
//   { name: 'Leo', specialization: 'Artist' },
//   { name: 'Dan', specialization: 'Manager' },
// ];

// const result = team1.reduce(
//   (acc, { specialization }) => {
//     const { salary, tax } = salaries1[specialization];
//     let taxedSalary = Math.floor(salary / (1 - parseInt(tax) / 100));

//     if (acc[specialization]) {
//       acc[specialization] += taxedSalary;
//     } else {
//       acc[specialization] = taxedSalary;
//     }

//     acc.totalSalary += taxedSalary;

//     return acc;
//   },
//   { totalSallary: 0 }
// );

// console.log(result);
