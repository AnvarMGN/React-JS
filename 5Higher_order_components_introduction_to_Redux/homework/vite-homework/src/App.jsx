import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeSwitch } from './components/ThemeSwitch/ThemeSwitch';

function App() {

  return (
    <Provider store={store}>
      <ThemeSwitch />
    </Provider>
  )
}

export default App;
