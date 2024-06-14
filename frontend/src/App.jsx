import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FilmPage from "./pages/Film/FilmPage";
import TicketPage from "./pages/Ticket/TicketPage";
import NoPage from "./pages/NoPage/NoPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import LayoutAdmin from "./components/LayoutAdmin/LayoutAdmin";
import AdminMovie from "./pages/Admin/AdminMovie/AdminMovie";
import AdminCinema from "./pages/Admin/AdminCinema/AdminCinema";
import AdminShow from "./pages/Admin/AdminShow/AdminShow";
import QueryClientProvider from "./QueryClientProvider";

function App() {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="film" element={<FilmPage />} />
            <Route path="ticket" element={<TicketPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="admin" element={<LayoutAdmin />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="data-movie" element={<AdminMovie />} />
            <Route path="data-cinema" element={<AdminCinema />} />
            <Route path="data-show" element={<AdminShow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
