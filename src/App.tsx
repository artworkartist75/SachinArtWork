import './index.css'
import Navbar from './layouts/Navbar';
import Routing from './routes/Routing';

function App() {
  return (
    <div className="p-2 bg-black">
     <Navbar />
     <Routing />
    </div>
  );
}

export default App