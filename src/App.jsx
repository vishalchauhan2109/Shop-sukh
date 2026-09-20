import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Login from "./Partners/Components/Login/Login"
import Main from './Partners/Components/Main'
import AdminDashboard from './Partners/Components/Utils/AdminDashboard'
import MyEarnings from './Partners/Components/Utils/MyEarnings'
import MyProfile from './Partners/Components/Utils/MyProfile'
import About from './Partners/Components/Utils/About'
import Product from './Partners/Components/Utils/Product'
import Additems from './Partners/Components/Utils/Additems'

import HomeScreen from './User/Components/Screen/HomeScreen'
import SelectUserorPartner from './SelectUserorPartner'

import { useContext, useEffect } from 'react'
import { ProductContext } from './ContextApi/ProductContext'

import UserMainScreen from './User/Components/Screen/UserMainScreen'
import ShopScreen from './User/Components/Screen/ShopScreen'
import ProfileScreen from './User/Components/Screen/ProfileScreen'
import CartScreen from './User/Components/Screen/CartScreen'
import CheckoutSection from './User/Components/Screen/CheckoutSection'
import AboutUs from './User/Components/Screen/Aboutus'
import { UserLogin } from './User/Components/Screen/UserLogin'

import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useState } from 'react'
import { setUser } from './User/Components/Store/userSlice'
import Shimmar from './User/Components/Reusable/ShimmarUi'

// IMPORTANT:
// apne actual API URL ke according rakho
const API_BASE_URL = "http://localhost:5000"

function App() {

  const { identity } = useContext(ProductContext)

  const loggedinuser = useSelector((state) => state.user)

  const dispatch = useDispatch()

  console.log("loggedinuser", loggedinuser)

const [loading, setLoading] = useState(true);

useEffect(() => {
  const checkAuth = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/me`,
        {
          withCredentials: true,
        }
      );

      dispatch(setUser(response?.data?.user));
    } catch (error) {
      // dispatch(logout());
      console.error("Error checking authentication:", error);
    } finally {
      setLoading(false);
    }
  };

  checkAuth();
}, [dispatch]);

if (loading) {
  return <Shimmar/>;
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SelectUserorPartner />,
    },

    {
      path: "/patner/login",
      element: <Login />
    },

    {
      path: "/user/login",
      element: <UserLogin />
    },

    {
      path: "/Partner",
      element: <Main />,
      children: [
        {
          index: true,
          element: <AdminDashboard />
        },
        {
          path: "MyEarnings",
          element: <MyEarnings />,
        },
        {
          path: "profile",
          element: <MyProfile />
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Products",
          element: <Product />
        },
        {
          path: "Additems",
          element: <Additems />,
        }
      ]
    },

    {
      path: "/user",
      element: loggedinuser?.isAuthenticated
        ? <HomeScreen />
        : <UserLogin />,

      children: [
        {
          index: true,
          element: <UserMainScreen />
        },
        {
          path: "home",
          element: <HomeScreen />
        },
        {
          path: "ShopScreen",
          element: <ShopScreen />
        },
        {
          path: "ProfileScreen",
          element: <ProfileScreen />
        },
        {
          path: "CartScreen",
          element: <CartScreen />
        },
        {
          path: "CheckoutSection",
          element: <CheckoutSection />
        },
        {
          path: "AboutUs",
          element: <AboutUs />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App