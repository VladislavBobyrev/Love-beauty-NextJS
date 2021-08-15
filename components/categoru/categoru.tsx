import React from "react";
import { ProductWeek } from "../productWeek/porductWeec";

export const Category = ():JSX.Element => {
	return(
		<>
				<section className="content__gallery gallery category">
						<h2 className="gallery__title">Категории</h2>
						<div className="gallery__items">
							<div className="gallery__item ">
								<img src="/lable/EPICA_09.04.2021_1080х1080.png" alt=""/>
							</div>
							<div className="gallery__item">
								<img src="/lable/Estel_22.04.2021_275х275.jpg" alt=""/>
							</div>

							<div className="gallery__item">
								<img src="/lable/Hempz_22.04.2021_275х275.jpg" alt=""/>
							</div>
							<div className="gallery__item">
								<img src="/lable/Kerastase_12.04.2021_275х275.jpg" alt=""/>
							</div>
							<div className="gallery__item">
								<img src="/lable/Loreal-Professionnel_12.04.2021_275х275.png" alt=""/>
							</div>
							{/*<div className="gallery__item">
								<img src="/lable/Hempz_22.04.2021_275х275.jpg" alt=""/>
							</div>*/}
						</div>
			</section>
		</>
	)
}