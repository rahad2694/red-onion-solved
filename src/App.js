import { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { Route, Routes } from 'react-router-dom';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Breakfast from './components/Breakfast/Breakfast';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Body></Body> */}
      <Toaster />
      <Routes>
        <Route path='/' element={<Body></Body>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/breakfast' element={<Breakfast></Breakfast>}></Route>
      </Routes>
    </div>
  );
}

export default App;
