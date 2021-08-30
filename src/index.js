import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import AppRouter from '../router';

const App = () => <AppRouter />;

ReactDOM.render(<App />, document.querySelector('#root'));
