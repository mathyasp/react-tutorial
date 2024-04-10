import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import About from './components/About';
import POPOSList from './components/POPOSList';
import POPOSDetails from './components/POPOSDetails';
import Newsletter from './components/Newsletter';
import SearchResults from './components/SearchResults'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<POPOSList />} />
        <Route path='about' element={<About />} />
        <Route path='/details/:id' element={<POPOSDetails />} />
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/search' element={<SearchResults />} />
      </Route>
    </Routes>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();