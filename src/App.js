import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home/Home';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToShopList } from './components/ToShopList/ToShopList';
import { Options } from './components/OptionContainer/Options';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/options' element= {<Options />}/>
        <Route path='/todo' element= {<ToDoList />}/>
        <Route path='/toshop' element= {<ToShopList />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
