import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Layout from "./Layout";
import NoMatch from "./NoMatch";
import Login from "./Auth/Login";
import Signup from './Auth/Signup'

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}