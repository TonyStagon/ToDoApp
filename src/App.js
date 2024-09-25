import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/register';
import Profile from './pages/profile';
import CompletedTasks from './pages/CompletedTasks';
import Navbar from './components/navBar';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import './App.css';

function App() {
    return ( <
        Router >

        <
        Routes >
        <
        Route path = "/"
        element = { <
            PublicRoute >
            <
            Login / >
            <
            /PublicRoute>
        }
        /> <
        Route path = "/register"
        element = { <
            PublicRoute >
            <
            Register / >
            <
            /PublicRoute>
        }
        /> <
        Route path = "/home"
        element = { <
            ProtectedRoute >
            <
            Navbar / >
            <
            Home / >

            <
            /ProtectedRoute>
        }
        /> <
        Route path = "/profile"
        element = { <
            ProtectedRoute >
            <
            Navbar / >
            <
            Profile / >

            <
            /ProtectedRoute>
        }
        /> <
        Route path = "/completed-tasks"
        element = { <
            ProtectedRoute >
            <
            Navbar / >
            <
            CompletedTasks / >

            <
            /ProtectedRoute>
        }
        /> < /
        Routes > <
        /Router>
    );
}

export default App;