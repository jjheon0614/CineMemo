import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Layout from "./Layout";
import NoMatch from "./NoMatch";

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}