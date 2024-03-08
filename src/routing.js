import React from 'react';
import {
    createBrowserRouter
} from "react-router-dom";
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';
import Project from './components/Project';
import Login from './components/Login';
import Residential from './components/Residential';
import Commercial from './components/Commercial';
import Government from './components/Government';
import Infrastructure from './components/Infrastructure';
import Industrial from './components/Industrial';
import Signup from './components/Signup';
import Document from './user-comp/Document';
import Design from './user-comp/Design';
import Accounts from './user-comp/Accounts';
import Progress from './user-comp/Progress';
import DesignAd from './admin-component/DesignAd';
import AccountsAd from './admin-component/AccountsAd';
import ProgressAd from './admin-component/ProgressAd';
import First from './admin-component/First';
import DocumentAd from './admin-component/DocumentAd';
import CareerAd from './admin-component/CareerAd';
import Job from './components/Job';
import AddProject from './admin-component/AddProject';
import EmployeesAd from './admin-component/EmployeesAd';



const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/career',
            element: <Career></Career>
        },
        {
            path: '/project',
            element: <Project></Project>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/residential',
            element: <Residential></Residential>
        },
        {
            path: '/commercial',
            element: <Commercial></Commercial>
        },
        {
            path: '/government',
            element: <Government></Government>
        },
        {
            path: '/industrial',
            element: <Industrial></Industrial>
        },
        {
            path: '/infrastructure',
            element: <Infrastructure></Infrastructure>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/doc',
            element: <Document></Document>
        },
        {
            path: '/design',
            element: <Design></Design>
        },
        {
            path: '/accounts',
            element: <Accounts></Accounts>
        },
        {
            path: '/progress',
            element: <Progress></Progress>
        },
        {
            path: '/document-ad',
            element: <DocumentAd></DocumentAd>
        },
        {
            path: '/design-ad',
            element: <DesignAd></DesignAd>
        },
        {
            path: '/accounts-ad',
            element: <AccountsAd></AccountsAd>
        },
        {
            path: '/progress-ad',
            element: <ProgressAd></ProgressAd>
        },
        {
            path: '/first',
            element: <First></First>
        },
        {
            path: '/careerad',
            element: <CareerAd></CareerAd>
        },
        {
            path: '/job',
            element: <Job></Job>
        },
        {
            path: '/addproject',
            element: <AddProject></AddProject>
        },
        {
            path: '/employeead',
            element: <EmployeesAd></EmployeesAd>
        },
        ]
    },

]);

export default router;