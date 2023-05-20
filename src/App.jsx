import './App.css'
import {Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Contact } from './pages/contact/Contact';
import { Task } from './pages/task/Task'
import { Home } from './pages/home/Home';
// import { useEffect } from 'react';

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='task' element={<Task />}/>
      </Routes>
    </>
  )
}

export default App
