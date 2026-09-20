import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductProvider from './ContextApi/ProductData.jsx'
import { Provider } from 'react-redux'
import { userStore } from './User/Components/Store/userStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <Provider store={userStore}>
        <App />
      </Provider>
    </ProductProvider>
  </StrictMode>
)