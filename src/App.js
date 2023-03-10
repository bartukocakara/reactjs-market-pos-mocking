import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import POSPage from './pages/POSPage';
import Example from './pages/Example';
import Next from './pages/Next';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pos" element={<POSPage/>} />
        <Route path="/example" element={<Example/>} />
        <Route path="/next" element={<Next/>} />
      </Routes>
    </Router>
  );
}

export default App;
