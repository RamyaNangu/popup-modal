import { useState } from 'react';
import './App.css';
import Modal from "./components/Modal"

function App() {
  const [showModal,setShowModel] = useState(false)

  return (
    <div className="h-screen flex flex-col items-center gap-6 bg-[#14161b] text-white">
      <h1 className='text-5xl font-bold mt-4'>Popup Modal</h1>
      <button onClick={()=>{setShowModel(!showModal)}} className='bg-violet-500 px-4 py-2 rounded-lg text-lg'>Get the eBook</button>
      {showModal && <Modal  onClose={()=> setShowModel(false)}/>}
    </div>
  );
}

export default App;
