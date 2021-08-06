import CardList from './components/CardList';
import { ToastContainer } from 'react-toastify';
import MovieContextProvider from './contexts/Movies';
import './styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section id="layout">
        <MovieContextProvider>
          <div className="filter-area">
            <Filter />
          </div>
          <CardList/>
          <ToastContainer position="bottom-center" />
        </MovieContextProvider>
      </section>
    </div>
  );
}

export default App;
