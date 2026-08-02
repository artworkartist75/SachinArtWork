import './index.css'
import Navbar from './layouts/Navbar';
import Routing from './routes/Routing';

function App() {
  return (
    <div className="bg-black bg-white text-black dark:bg-black dark:text-white">
     <Navbar />
     <Routing />
    </div>
  );
}

export default App