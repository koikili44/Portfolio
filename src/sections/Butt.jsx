import React from 'react'
import Button from '../components/Button';

function Butt() {
  return (
    <div className="flex justify-center gap-5 mt-4 font-medium">
      <Button name="Get Yours now" background="bg-white px-2 py-1 rounded-sm"/>
      <Button name="See my works" background="bg-gray-800 px-2 py-1 text-white rounded-sm"/>
      


    </div>
  );
}

export default Butt