import './index.css'
import App from './App.js'
import ReactDOM from 'react-dom/client'
import provider, { Provider } from 'react-redux'
import { store } from './state/store.js'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App /> 
  </Provider>
)