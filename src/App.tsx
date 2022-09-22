import React, { useState, useEffect } from "react";
import './style/style.scss';

export function App() {
  const [Button, setButton] = useState(false)
  const [KeyPress, setKeyPress] = useState('')
  const [KeyFieldHidden, setKeyFieldHidden] = useState('field--hidden')

  const root = document.querySelector('html') as HTMLElement

  function handleKeyCapture(event: React.KeyboardEvent<HTMLElement>){
    const keyPress = event.key
    if(event.code === 'Space'){
      return setKeyPress('Space')
    }
    setKeyPress(keyPress)
  }

  function RandomNumberRGB(){
    return Math.floor(Math.random() * 255);
  }

  function showElements(){
    setKeyFieldHidden('field--show')
  }

  function outFocusElement(){
    setButton(false)
    setKeyFieldHidden('field--hidden')
  }

  useEffect(() => {
    
    root.style.backgroundColor = `rgb(${RandomNumberRGB()},${RandomNumberRGB()},${RandomNumberRGB()})`;
  }, [KeyPress])
  
  return (
    <div className="container">
      <button onClick={showElements} onKeyDown={handleKeyCapture} onFocus={() => setButton(!Button)} onBlur={outFocusElement}> 
        {Button ? 'Aperte qualquer Botão': 'Clique aqui para começar'}
      </button>
      <div className={KeyFieldHidden}>
        <span>{KeyPress}</span>
      </div>
    </div>
  )
}

