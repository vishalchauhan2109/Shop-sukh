
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
// import Footer from './Partners/Components/Footer'
// import Header from './Components/Partners/Header'
import Login from  "./Partners/Components/Login/Login"
import Main from './Partners/Components/Main'
// import Sidebar from './Components/Partners/Sidebar'
import AdminDashboard from './Partners/Components/Utils/AdminDashboard'
import MyEarnings from './Partners/Components/Utils/MyEarnings'
import MyProfile from './Partners/Components/Utils/MyProfile'
import About from './Partners/Components/Utils/About'
import Product from './Partners/Components/Utils/Product'
import Additems from './Partners/Components/Utils/Additems'
import HomeScreen from './User/Components/Screen/HomeScreen'
import SelectUserorPartner from './SelectUserorPartner'
import { useContext } from 'react'
import { ProductContext } from './ContextApi/ProductContext'
import UserMainScreen from './User/Components/Screen/UserMainScreen'
import ShopScreen from './User/Components/Screen/ShopScreen'
import ProfileScreen from './User/Components/Screen/ProfileScreen'
import CartScreen from './User/Components/Screen/CartScreen'
import CheckoutSection from './User/Components/Screen/CheckoutSection'
import AboutUs from './User/Components/Screen/Aboutus'




function App() {

  const {identity} = useContext(ProductContext)
  console.log(identity)

  if(identity === "shopkeeper"){
    console.log("hiii")
  }
  // setIdentity("shoppkeeper");
var router =  createBrowserRouter([
    

    {
    path: "/",
    element: <SelectUserorPartner/>,
    },
// shopkeeper wala routing
    {
      path: "/Partner",
      element:<Main/>,
      children: [
        {
          index: true,
          element:<AdminDashboard/>
        },
        {
          path:"Partner/MyEarnings",
          element:<MyEarnings/>,
        },
        {
          path:"Partner/profile",
          element: <MyProfile/>
        },
        {
          path:"Partner/About",
          element:<About/>,
        },
        {
          path:"Partner/Products",
          element:<Product/>
        },
        {
          path:"Partner/Additems",
          element:<Additems/>,
        }
        
      ]
    },
    // user wala routing
    {
      path: "/User",
      element :<HomeScreen/>,

      children: [
        {
          index:true,
          element:<UserMainScreen/>
        },
        {
          path : "User/ShopScreen",
          element:<ShopScreen/>
        },
        {
          path:"User/ProfileScreen",
          element:<ProfileScreen/>
        },
        {
          path:"User/CartScreen",
          element: <CartScreen/>
        },
        {
          path:"User/CartScreen/User/CheckoutSection",
          element:<CheckoutSection/>
        },
        {
          path:"User/AboutUs",
          element:<AboutUs/>
        },
        {
          path:"User/ShopScreen",
          element:<ShopScreen/>
        }
      ]
    }
  ])


  return (
        
    <RouterProvider router={router} >

    <div className="flex">       {/* <Login/>       */}

       
    </div>
    </RouterProvider>
  )
}

export default App
