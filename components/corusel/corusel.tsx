import React from "react";

export const Corusel = ():JSX.Element => {
	return(
	
	<div className="container">
		<div className="coruseles">
			<ul className='carusel__container'>
				<li className='corusel'>
					<a href=""><img src="/lable/Estel_22.04.2021_275х275.jpg" alt="" /></a>
				</li>
				<li className='corusel'>
					<a href=""><img src="/lable/Estel_22.04.2021_275х275.jpg" alt="" /></a>
				</li>
				<li className='corusel'>
					<a href=""><img src="/lable/Estel_22.04.2021_275х275.jpg" alt="" /></a>
				</li>
				<li className='corusel'>
					<a href=""><img src="/lable/Estel_22.04.2021_275х275.jpg" alt="" /></a>
				</li>
				<li className='corusel'>
					<a href=""><img src="/lable/Estel_22.04.2021_275х275.jpg" alt="" /></a>
				</li>
			
			</ul>
			<div className="bnt__next">next<img src="" alt="" /></div>
			<div className="bnt__prev">prev<img src="" alt="" /></div>
		</div>
	</div>
	
	)
}