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
								<div className='prise'>									
										<input className='input__min' type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input className='input__pl' type="button" value='+'/>
										<h1>11304 P</h1>
								</div>									
										<button className='buy'>в корзину</button>
								
								</form>								
							</div>
							<div>
								<div className="gallery__item">
								<img src="/lable/Hempz_22.04.2021_275х275.jpg" alt=""/>
								</div>
								<form>
								<div className='prise'>									
										<input className='input__min' type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input className='input__pl' type="button" value='+'/>
										<h1>11304 P</h1>
								</div>									
										<button className='buy'>в корзину</button>
								
								</form>								
							</div>
							<div>
								<div className="gallery__item">
								<img src="/lable/Hempz_22.04.2021_275х275.jpg" alt=""/>
								</div>
								<form>
								<div className='prise'>									
										<input className='input__min' type="button" value='-'/>
										<input className='input__text' type='text' value='1'/>
										<input className='input__pl' type="button" value='+'/>
										<h1>11304 P</h1>
								</div>									
										<button className='buy'>в корзину</button>
								
								</form>								
							</div>
							
						</div>
			</section>
	)
}