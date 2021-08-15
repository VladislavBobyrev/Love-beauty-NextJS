import React from "react"
import { Category } from "../categoru/categoru"
import { News } from "../news/news"
import PopularSlider from "../popularSlider/pooular"

import { Preview } from "../preview/preview"


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
      <News/>
			<PopularSlider/>
		</main>
	)
}