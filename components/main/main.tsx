import React from "react"
import { Category } from "../categoru/categoru"

import { Preview } from "../preview/preview"
import Slide from "../slide/slide"
const img = [
	<img src="/lable/Estel_22.04.2021_275х275.jpg" alt=""/>,
	<img src="/lable/Estel_22.04.2021_275х275.jpg" alt=""/>,
	<img src="/lable/Estel_22.04.2021_275х275.jpg" alt=""/>,
	]


export const Main = ():JSX.Element => {
	return(
		<main>
			<Preview/>
			<Category/>

			<div className='container'>
      <h1 className='title'>Sticky slider</h1>
      <div className='slider'>
        <Slide children={img} translate='10px' transition='2s' color='red'/>
      </div>
    </div>
		</main>
	)
}