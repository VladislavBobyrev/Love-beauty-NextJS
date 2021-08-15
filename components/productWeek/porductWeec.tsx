import React from "react";


export const ProductWeek = ():JSX.Element => {
	return(
		<section className="content__gallery gallery">
						<h2 className="gallery__title">Товары недели</h2>
						<div className="gallery__items">
							<div>
								<div className="gallery__item">
								<img src="/lable/Hempz_22.04.2021_275х275.jpg" alt=""/>
								</div>
								<form>									
										<input type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input type="button" value='+'/>
										<div>11304 P</div>									
										<button className='buy'>в корзину</button>
								
								</form>								
							</div>
							<div>
								<div className="gallery__item">
								<img src="/lable/Loreal-Professionnel_12.04.2021_275х275.png" alt=""/>
								</div>
								<form>
																
										<input type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input type="button" value='+'/>
									
										<div>11304 P</div>									
								
								<button className='buy'>в корзину</button>
								</form>								
							</div>
							<div>
								<div className="gallery__item">
								<img src="/lable/Kerastase_12.04.2021_275х275.jpg" alt=""/>
								</div>
								<form>									
										<input type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input type="button" value='+'/>
										<div> 11304 P</div>									
										<button className='buy'>в корзину</button>
								</form>								
							</div>
						</div>
			</section>
	)
}