import React from "react";


export const ProductWeek = ():JSX.Element => {
	return(
		<section className="content__gallery gallery">
						<h2 className="gallery__title">Товары недели</h2>
						<div className="gallery__items">
							<div className="gallery__item gallery__item_big">
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
							
		
						</div>
			</section>
	)
}