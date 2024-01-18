import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,800&display=swap"
       rel="stylesheet"></link>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
