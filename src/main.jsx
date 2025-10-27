import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './Partners/Components/Utils/ProductData.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
    <App/>
    </ProductProvider>
  </StrictMode>,
)
