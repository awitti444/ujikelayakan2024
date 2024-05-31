import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Stuff from "./pages/Stuff/Index";
import Dashboard from "./pages/Dashboard";
import StuffCreate from "./pages/Stuff/Create";
import StuffEdit from "./pages/Stuff/Edit";
import Inbound from "./pages/Inbound";
import InboundCreate from "./pages/Inbound/create";
import InboundShow from "./pages/Inbound/show";
import TrashStuff from "./pages/TrashStuff";
import TrashInbound from "./pages/TrashInbound";
import Lending from "./pages/Lending/index";
import User from "./pages/User/index";
import UserShow from "./pages/User/show";
import UserEdit from "./pages/User/edit";
import UserCreate from "./pages/User/create";
import TrashUser from "./pages/TrashUser";
import Restroration from "./pages/Lending/restroration"
import LendingCreate from "./pages/Lending/create";
import LendingShow from "./pages/Lending/show";



// import RestoreStuff from "./pages/RestoreStuff";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/stuff', element: <Stuff /> },
    { path: '/stuff/create', element: <StuffCreate /> },
    { path: '/stuff/edit/:id', element: <StuffEdit /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/inbound', element: <Inbound /> },
    { path: '/inbound/create', element: <InboundCreate /> },
    { path: '/stuffs/trash', element: <TrashStuff /> },
    { path: '/stuffs/trash', element: <TrashStuff /> },
    { path: '/inbound/trash', element: <TrashInbound /> },    
    { path: '/inbound/:id/show', element: <InboundShow /> },
    { path: '/lending', element: <Lending /> },
    { path: '/lending/create', element: <LendingCreate /> },
    { path: '/lending/:id/show', element: <LendingShow /> },
    { path: '/lending/:id/restoration', element: <Restroration/> },
    { path: '/user', element: <User/> },
    { path: '/user/:id/show', element: <UserShow /> },
    { path: '/user/edit/:id', element: <UserEdit/> },
    { path: '/user/create', element: <UserCreate/> },
    { path: '/user/trash', element: <TrashUser/> },
    // { path: '/user/trash', element: <TrashUser/> },



    // { path: '/stuffs/restore', element: <RestoreStuff /> },

    // { path: '/stuff/edit:id', element: <StuffCreate /> },
])