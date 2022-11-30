import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import CartPage from './pages/CartPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';

import '../scss/app.scss';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from './store/user';
import RequireAuth from './components/hoc/RequireAuth';
import AuthProvider from './components/hoc/AuthProvider';
import UserPage from './pages/UserPage';
import LogOut from './pages/LogOut';
import Header from './components/Header/Header';
function App() {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const shouldRedirect = isLoggedIn ? true : false;
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    return (
        <AuthProvider>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/logout" element={<LogOut />} />
                        <Route path="/profile" element={<UserPage />} />

                        <Route
                            path="/goods/:id"
                            element={
                                <RequireAuth>
                                    <ProductPage />
                                </RequireAuth>
                            }
                        />
                        <Route path="/cart" element={<CartPage />} />
                        <Route
                            path="/login/:type"
                            element={
                                shouldRedirect ? <Navigate replace to={from} /> : <LoginPage />
                            }
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;
