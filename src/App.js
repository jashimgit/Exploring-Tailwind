/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.css';
import ImageCard from './component/ImageCard';


function App() {
// const term = '';

const [image, setImage] = useState([])

// const url = `https://pixabay.com/api/?key=22017556-25935b1e52e94dc42247b0b83&q=yellow+flowers&image_type=photo&pretty=true`


 
useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22017556-25935b1e52e94dc42247b0b83&q=yellow+flowers&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => setImage(data.hits))
    .catch(err =>  console.log(err.message)) 
  }, [])

  return (
    <div className="bg-gray-100">
       <div className='container mx-auto '>
     <h1 className="text-center text-3xl text-pink-500 py-5	">Image Gallery</h1>
     <div className="grid grid-cols-3 gap-4">
     {
       Object.length < 0 ? (
        <button type="button" class="bg-rose-600 text-center" disabled>
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          Loading...
        </svg>
        Processing
      </button>
       ) : (
        image?.map(img => <ImageCard  key={img.id} image={img} />)
       )
       
     }
     </div>
    
    
    </div>
    </div>
   
  );
}

export default App;
