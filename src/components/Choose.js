import './Choose.css'
import logo from '../images/logo.png'
import React from 'react'


export default function Choose(){
  return (
    <section className='secComponent'>
    <div className='chooseitem'>
    <div className='headingChoose'>Why Choose Us</div>

    <div className='firstDiv'>

    <div className='card'>
    <div className='heading'>heading1</div>
     <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
     </div>

    <div className='card'>
    <div  className='heading'>heading2</div>
    <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
    </div>

    <div className='card'>
    <div  className='heading'>heading3</div>
    <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
    </div>

    <div className='card'>
    <div  className='heading'>heading4</div>
     <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
     </div>

    <div className='card'>
    <div  className='heading'>heading5</div>
    <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
    </div>

    <div className='card'>
    <div  className='heading'>heading6</div>
    <p className='paragraph'>This is a short description elaborating the service you have mentioned above.</p>
    </div>

    </div>

    </div>

    <div className='footer'>
    <div className='logoset'>
    <img src={logo} className='logo'></img>
    <div className='logoname'>SHIVEEN DESIGN</div>
    <div className='logoDescription'>we design your dreams</div>
    </div>
<div className='footersec'>

<div className='part1'>
<div className='mainhead'>Get In Touch</div>
<div id='subtopic'>Whatsapp</div>
<div id='subtopic'>Instagram</div>
<div id='subtopic'>Twitter</div>
</div>

<div className='part1'>
<div className='mainhead'>Contact Info</div>
<div id='subtopic'>Whatsapp</div>
<div id='subtopic'>Instagram</div>
<div id='subtopic'>E-mail</div>
</div>

</div>
  

    </div>
    </section>
  );
}
