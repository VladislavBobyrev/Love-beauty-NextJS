import React from "react"

export const Header = ():JSX.Element => {
	return(
		<header >
			<a className='left  ef' href="https://www.figma.com/file/bR8kVVEBmaECwixS25mRgo/Update_Touch%C3%A9?node-id=817%3A19481"><img className='logo' src="/header/logoLoveBeauty.png" alt="" width='40px'/>
			<img className='burger' src="/header/burger.svg" alt="" />
			<span>	love&Beauty</span>
			</a>
			<form>
				<input className='text' type="text" placeholder='поиск'/>
				<button><img src="/header/search.svg" alt="" /></button>
			</form >
			<a href="" className='center ef'><div className="userName">vladislavskiy</div><img src="/header/LK.svg" alt="" /></a>
			<a href=""  className='center ef'><img src="/header/sell.svg" /></a>
			<a href=""  className='right center ef'><img src="/header/phone.svg" width='26px' />
			<ul>
				<li><a href=""><img src="/header/wotsap.svg" alt="" /> 8 900 000 00 00</a></li>
				<li><a href=""><img src="/header/wotsap.svg" alt="" />whotsap</a></li>
				<li><a href=""><img src="/header/telegramm.svg" alt="" />telegramm</a></li>
			</ul>
			</a>

			<nav >
				<ul>
					<li><a href="">бренды</a>
					<ul> 
				<li><a href="">a</a>
				<ul>
						<li><a href="">henosi</a></li>
						<li><a href="">tesla</a></li>
						<li><a href="">iphone</a></li>
						<li><a href="">shampuu</a></li>
						<li><a href="">henosi</a></li>
						<li><a href="">tesla</a></li>
						<li><a href="">iphone</a></li>
						<li><a href="">shampuu</a></li>
						<li><a href="">henosi</a></li>
						<li><a href="">tesla</a></li>
						<li><a href="">iphone</a></li>
						<li><a href="">shampuu</a></li>
				</ul>
				</li>
				<li><a href="">b</a></li>
				<li><a href="">c</a></li>
				<li><a href="">d</a></li>
				<li><a href="">e</a></li>
				<li><a href="">f</a></li>
				<li><a href="">g</a></li>
				<li><a href="">h</a></li>
				<li><a href="">i</a></li>
				<li><a href="">j</a></li>
				<li><a href="">k</a></li>
				<li><a href="">l</a></li>
				<li><a href="">m</a></li>
				<li><a href="">n</a></li>
				<li><a href="">o</a></li>
				<li><a href="">p</a></li>
				<li><a href="">q</a></li>
				<li><a href="">r</a></li>
				<li><a href="">s</a></li>
				<li><a href="">t</a></li>
				<li><a href="">u</a></li>
				<li><a href="">x</a></li>
				<li><a href="">y</a></li>
				<li><a href="">z</a></li>
				<li><a href="">A-Я</a></li>
				<li><a href="">0-9</a></li>
			</ul>
					</li>
					<li><a href="">волосы</a></li>
					<li><a href="">тело</a></li>
					<li><a href="">лицо</a></li>
					<li><a href="">	для мужчин</a></li>
					<li><a href="">доставка и оплата</a></li>
					<li><a href="">акции</a></li>
				</ul>
			
		</nav>
		</header>
		
	)
}