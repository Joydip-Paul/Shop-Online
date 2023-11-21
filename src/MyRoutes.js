import { Routes, Route } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Shop from './components/Shop/Shop';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </div>
    );
}

export default App;
