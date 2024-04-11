import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './componets/navbar';
import Footer from './componets/footer'
import Signup from './componets/signup'
import './App.css';
import PrivateComponent from './componets/privateComponent';
import Login from './componets/login'
import AddProduct from './componets/addProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>

        <Route element={<PrivateComponent/>}> 
        <Route path='/' element={ <h1>product listing in this route </h1>} />
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/update' element={<h1>updation in this route </h1>} />
        <Route path='/profile' element={<h1>profile in this route </h1>} />
        <Route path='/logout' element={<h1>log out in this route </h1>} />
        {/* <Route path='/login' element={<Login/>} /> */}
        </Route>

        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
