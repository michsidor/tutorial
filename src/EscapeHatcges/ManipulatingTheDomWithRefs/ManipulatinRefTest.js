import React, { forwardRef, useRef } from 'react';


const MyComponent = forwardRef((props,ref) => {
  return(
    <div>
      <input ref={ref} />
    </div>
  )
})

function ManipulatinRefTest() {
  const myRef = useRef(null);

  function handleClick(){
    myRef.current.focus();
  }
  return (
    <>
      <MyComponent ref={myRef}/>
      <button onClick={handleClick}>Kliknij mnie</button>
    </>
  )
}

export default ManipulatinRefTest;
