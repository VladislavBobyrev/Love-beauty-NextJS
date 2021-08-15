import React, { useState } from 'react'


const imgBoxVariants = {
  hidden:{
    x: 500,
    opacity: 0
  },
  visible:{
    x: 0,
    opacity: 1,
    transition:{
      delay: 0.5, duration: 0.5
    }
  }
}


export const News = () => {

  const [step, setStep] = useState(1);

  const handleLeftArrow=()=>{
    if(step===1){
      setStep(3);
    }
    else{
    setStep(step-1);
    }
  }

  const handleRightArrow=()=>{
    if(step===3){
      setStep(1);
    }
    else{
      setStep(step+1);
    }
  }

  const goToSlide1=()=>{
    setStep(1);
  }

  const goToSlide2=()=>{
    setStep(2);
  }

  const goToSlide3=()=>{
    setStep(3);
  }

  return (
    <div className='wrapper'>
<h1>Hовинки</h1>
      <div className='contents'>

        <div className='left-arrow' onClick={handleLeftArrow}>
				&#10594;
        </div>

       {step===1&&<div className='img-box' 
      >
        	 <img src="/lable/SCHWARZKOPF_22.04.2021_768х393.jpg" alt=""/> 
					 <form>
								<div className='prise'>									
										<input className='input__min' type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input className='input__pl' type="button" value='+'/>
										<h1>11304 P</h1>
								</div>									
										<button className='buy'>в корзину</button>
								
								</form>	
         </div>}

       {step===2&&<div className='img-box'>
						 <img src="/lable/OLLIN_12.04.2021_768х393.jpg" alt=""/>       
						 <form>
								<div className='prise'>									
										<input className='input__min' type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input className='input__pl' type="button" value='+'/>
										<h1>11304 P</h1>
								</div>									
										<button className='buy'>в корзину</button>
								
								</form>			
       </div>}

       {step===3&&<div className='img-box' >
			 <img src="/lable/Redken_08.04.2021_768х393.jpg" alt=""/>       
			 <form>
								<div className='prise'>									
										<input className='input__min' type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input className='input__pl' type="button" value='+'/>
										<h1>11304 P</h1>
								</div>									
										<button className='buy'>в корзину</button>
								
								</form>		
       </div>}

        <div className='right-arrow' onClick={handleRightArrow}>
				&#10596;
        </div>

      </div>

      <div className='indicators-box'>

          {step===1&&<><div className='indicator active'></div>
          <div className='indicator' onClick={goToSlide2}></div>
          <div className='indicator' onClick={goToSlide3}></div></>}

          {step===2&&<><div className='indicator' onClick={goToSlide1}></div>
          <div className='indicator active'></div>
          <div className='indicator' onClick={goToSlide3}></div></>}

          {step===3&&<><div className='indicator' onClick={goToSlide1}></div>
          <div className='indicator' onClick={goToSlide2}></div>
          <div className='indicator active'></div></>}

      </div>
      
    </div>
  )
}

export default News