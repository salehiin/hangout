import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import FlatDetails from '../pages/FlatDetails/FlatDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import Statistics from '../pages/Dashboard/Common/Statistics'
import AddFlat from '../pages/Dashboard/Host/AddFlat'
import MyListings from '../pages/Dashboard/Host/MyListings'
import Profile from '../pages/Dashboard/Common/Profile'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/flat/:id',
        element: <PrivateRoute><FlatDetails /></PrivateRoute>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Statistics></Statistics>
      },
      {
        path: 'add-flat',
        element: <AddFlat></AddFlat>
      },
      {
        path: 'my-listings',
        element: <MyListings></MyListings>
      },
      {
        path: 'manage-users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'profile',
        element: <Profile></Profile>
      },
    ],
  }
])
