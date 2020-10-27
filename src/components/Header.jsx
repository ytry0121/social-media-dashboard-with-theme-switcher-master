import React, { useState } from 'react';

function Header() {
  const [isDarkMode, setIsDerkMode] = useState(false);
  const cards = [...document.querySelectorAll('.card')];
  const blueTexts = [...document.querySelectorAll('.blue-text')];

  function darkModeToggle() {
    setIsDerkMode(!isDarkMode);
  }
  function changeBackgroundColor(element,color){
    element.style.backgroundColor=color;
  }

   
  if (isDarkMode) {
    //body
    document.body.classList.add('body-dark');
    document.body.classList.remove('body-light');

    //Card
    cards.forEach(card => {
       card.style = 'background-color:hsl(228, 28%, 20%)';
       card.onmouseover = ()=> changeBackgroundColor(card,'hsl(228, 28%, 27%)');
      card.onmouseout= ()=>changeBackgroundColor(card,'hsl(228, 28%, 20%)');     
      });
    blueTexts.forEach(blueText => blueText.style = 'hsl(228, 34%, 66%)');

  } else {
    document.body.classList.remove('body-dark');
    document.body.classList.add('body-light');

    //Card
    cards.forEach(card => 
      {
      card.style = 'background-color:hsl(227, 47%, 96%)';
      card.onmouseover = ()=> changeBackgroundColor(card,'hsl(227, 47%, 93%)');
      card.onmouseout= ()=>changeBackgroundColor(card,'hsl(227, 47%, 96%)');     
    });
    blueTexts.forEach(blueText => blueText.style = 'hsl(228, 12%, 44%)');
  }

  return (
    <header className='page-header'>
      <div>
        <h1 className='header-h1'>Social Media Dashboard</h1>
        <span className='blue-text bold'>Total Followers: 23,004</span>
      </div>
      <hr className='blue-text '/>
      <div className="dark-mode blue-text bold">Dark Mode
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={darkModeToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </header>);


}

export default Header; 