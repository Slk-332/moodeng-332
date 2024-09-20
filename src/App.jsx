import { useState,useEffect } from 'react'

//image
import moodeng from './image/moodeng.jpg'
import bana from './image/banana.jpg'
import wt from './image/wt.jpg'
import elcied from './image/elcied.jpg'
import myPhoto from './image/องแทร่.jpg'



function App() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100);

  const addSize1 = () => {
    if (level < 100) {
      setSize(size + 15);
    }
  }
  const addSize2 = () => {
    if (level < 100) {
      setSize(size + 35);
    }
  }
  const addSize3 = () => {
    if (level < 100) {
      setSize(size + 45);
    }
  }

  useEffect(() => {
    let thePhoto = document.getElementById('photo');
    if (level >= 100) {
      thePhoto.src = myPhoto;
      setSize(200)
    }
  }, [level]);

 


  return (
    <>
    <p className="text-center text-2xl  font-semibold">level : {level}</p>
    <div class="flex justify-center ...">
    <img className='w-3/4 h-fulls' id='photo' src={moodeng} alt=""  style={{ width: `${size}px`, transition: 'width 0.3s ease-in-out' }}/>
    </div>
    <div class="flex justify-center ..."> 
     
      <img className='w-1/4 h-fulls' src={bana} alt="" onClick={() => {setLevel(level + 5); addSize1();}} />                
      <img className='w-1/4 h-fulls' src={wt} alt="" onClick={() => {setLevel(level + 10); addSize2();}} />
      <img className='w-1/4 h-fulls' src={elcied} alt="" onClick={() => {setLevel(level + 15); addSize3();}}/>
    </div>
    </>
  )
}

export default App
