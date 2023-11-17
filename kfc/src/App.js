
import './App.css';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './Pages/Home';

function App() {
  return (
    <div className="container">
     <Home/>
     <Menu/>
    </div>
  );
}

export default App;
