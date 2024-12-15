import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NoMatch from "./NoMatch";

export default function RoutesSetup() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="*" element={<NoMatch />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}