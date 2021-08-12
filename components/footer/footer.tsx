import React from "react";

export const Footer = ():JSX.Element => {
return(
	<footer>
	<div className="footer_about">
		<a  href="https://www.figma.com/file/bR8kVVEBmaECwixS25mRgo/Update_Touch%C3%A9?node-id=817%3A19481">
			<img  src="/header/logoLoveBeauty.png" alt="лав бьюти love beauty" />
	  	love&Beauty
		</a>
	<a href="tel:+79109999999">Телефон 8901 123 45 67
	<input type="button" value="Позвонить" /></a>
	<span>Мы на связи ежедневно
с 10:00 до 18:00
(сб, вс - выходные дни)
	</span>	

	<span>Адрес 127055, г. Москва,	ул. Красная Плащадь, дом 1, офис призедента</span>
	</div>
	<div className="footer_info">
		<div>
			<a href="">Доставка товара</a>
			<a href="">Способы оплаты</a>
			<a href=""> Политика возврата</a>
			<a href="">Преимущества</a>
			<a href="">Конфиденциальность</a>

		</div>
		<div>
			<a href="">Найти мой магазин</a>
			<a href="">Обратная связь</a>
			<a href="">Бренды</a>
			<a href="">Преимущества</a>
		
		</div>
		<div>
			<a href=""> Помощь</a>
			<a href="">Подарочные сертификаты</a>
			<a href="">Карьера и вакансии</a>
			<a href="">Реклама у нас </a>
			<a href=""> Корпоративным клиентам</a>
		</div>
 
	
	</div>

	<div className="footer_social">		
		<a href=""><img src="/footer/fb.svg" alt="" /></a>
		<a href=""><img src="/footer/ig.svg" alt="" /></a>
		<a href=""><img src="/footer/tw.svg" alt="" />
	 </a>
	</div>
	</footer>
)
}