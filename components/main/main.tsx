import React from "react"
import { Category } from "../categoru/categoru"

import { Preview } from "../preview/preview"
import { Slider } from "../slide/slider"

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
      <Slider/>

		</main>
	)
}