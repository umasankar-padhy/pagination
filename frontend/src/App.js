import './App.css';
import HomePage from './component/HomePage';
import AdvancedExample from './component/Page';
import ApiContextProvider from './context/ApiContext';

function App() {

  return (
    <ApiContextProvider>
      <div className="App container ">
        <AdvancedExample />

        <HomePage />

      </div>
    </ApiContextProvider>

  );
}

export default App;
