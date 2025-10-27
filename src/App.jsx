
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




function App() {


var router =  createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen/>,
      children: [
        
        {
          index: true,
          element:<AdminDashboard/>
        },
        
        {
          path:"/MyEarnings",
          element:<MyEarnings/>,
        },
        {
          path:"/profile",
          element: <MyProfile/>
        },
        {
          path:"/About",
          element:<About/>,
        },
        {
          path:"/Products",
          element:<Product/>
        },
        {
          path:"/Additems",
          element:<Additems/>,
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
