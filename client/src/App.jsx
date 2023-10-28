import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignInDoctor from './pages/SignInDoctor';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import Home_user from './pages/Home_user';
import Home_doctor from './pages/Home_doctor';


export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-in-doctor" element={<SignInDoctor />}/>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/home-user" element={<Home_user />} />
                <Route path="/home-doctor" element={<Home_doctor />} />

            </Routes>
        </BrowserRouter>
    );
};