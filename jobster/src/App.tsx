import './App.css'
import Error from './Pages/Error'
import { HomeLayout } from './Pages/HomeLayout'
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import { LandingPage } from './Pages/LandingPage'
import AllJobs, { loader as allJobsLoader } from './Pages/AllJobs'
import { AddJob } from './Pages/AddJob'
import Stats from './Pages/Stats'
import Profile from './Pages/Profile'
import { action as loginAction, Login, loader as loginLoader } from './Pages/Login'
import Register, { action as registerAction, loader as registerLoader } from './Pages/Register'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { store } from './Store'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <LandingPage />
        }, {
          path: '/all-jobs',
          element: <AllJobs />,
          loader: allJobsLoader(store)
        }, {
          path: '/add-job',
          element: <AddJob />
        }, {
          path: '/stats',
          element: <Stats />
        }, {
          path: '/profile',
          element: <Profile />
        }
      ],
    },
    {
      path: '/login',
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
      loader: loginLoader(store)
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
      action: registerAction(store),
      loader: registerLoader(store)

    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  )
}

export default App
