import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Catalog from "./pages/catalog/Catalog";
import Choose from "./pages/choose/Choose";
import Details from "./pages/details/Details";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Offer from "./pages/offer/Offer";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/create/Create";
import Edit from "./pages/edit/Edit";
import Find from "./pages/find/Find";
import AuthGuard from "./guards/AuthGuard";
import ClientGuard from "./guards/ClientGuard";
import FreelancerGuard from "./guards/FreelancerGuard";
import { AuthGuards } from "./shared/types/user-types";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
    return (
        <AuthContextProvider>
            <>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route element={<AuthGuard type={AuthGuards.Guest} />}>
                            <Route path="/auth">
                                <Route
                                    path="register/*"
                                    element={<Register />}
                                />
                                <Route path="login" element={<Login />} />
                            </Route>
                        </Route>
                        <Route path="/catalog/*" element={<Catalog />} />
                        <Route path="/details/*" element={<Details />} />
                        <Route path="/profile/*" element={<Profile />} />
                        <Route element={<AuthGuard type={AuthGuards.Guest} />}>
                            <Route path="/choose/*" element={<Choose />} />
                        </Route>
                        <Route
                            element={
                                <AuthGuard type={AuthGuards.Authenticated} />
                            }
                        >
                            <Route path="/find/*" element={<Find />} />
                            <Route path="/create/*" element={<Create />} />
                            <Route path="/edit/*" element={<Edit />} />
                            <Route element={<FreelancerGuard />}>
                                <Route path="/offer/:id" element={<Offer />} />
                            </Route>
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </>
        </AuthContextProvider>
    );
}
