import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Task1 from './Tasks/Task1';
import { Task2 } from './Tasks/Task2';
import { Task3 } from './Tasks/Task3';
import { Task4 } from './Tasks/Task4';
import { Task5 } from "./Tasks/Task5"
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task1' element={<Task1 />} />

          <Route path='/task2' element={<div className='main'>
            <Task2 />
          </div>} />

          <Route path='/task3' element={<div style={{ minHeight: "100vh", backgroundColor: "#A7A1D3" }}>
            <Task3 colors={['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'brown', 'gray', 'black', 'white', 'violet', 'indigo', 'teal', 'magenta', 'olive', 'maroon', 'navy', 'lime', 'fuchsia', 'aqua', 'silver', 'gold']} />
          </div>} />

          <Route path='/task4' element={<div className='bg-dark pb-4' style={{ backgroundColor: "#000" }}>
            <Task4 />
          </div>} />
          <Route path='/task5' element={<Task5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
