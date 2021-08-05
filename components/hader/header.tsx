import React from "react"

export const Header = ():JSX.Element => {
	return(
		<header >
			<a className='center' href="https://www.figma.com/file/bR8kVVEBmaECwixS25mRgo/Update_Touch%C3%A9?node-id=817%3A19481"><img src="/header/logoLoveBeauty.png" alt="" width='36px'/>
				love&Beauty
			</a>
			<nav className='center'>
				<a href="#" className='revie'>обзор</a>
				<a href="#" className='shop'>магазин</a>
				<a href="#" className='surprise'>подарки</a>
			</nav>
			<a href="" className='center'><div className="userName">vladislavskiy</div><img src="/header/LK.svg" alt="" /></a>
			<a href=""><img src="/header/sell.svg" alt="" /></a>
			<a href=""><img src="/header/search.svg" alt="" /></a>
		</header>
	)
}