import Header from './common/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Shop from './components/Shop/Shop';
// import 'App.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
