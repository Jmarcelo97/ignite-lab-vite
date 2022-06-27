import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Subscribe />} />
                <Route path="/evento" element={<Event />} />
                <Route path="/evento/aulas/:slug" element={<Event />} />
            </Routes>
        </BrowserRouter>
    );
}