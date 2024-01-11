import React from "react";
import flowerBasket from '../../../src/images/flower-basket.png';

function Delivery() {
	return (
		<section className="delivery" id="delivery">
			<h1 className="delivery__title">Доставка</h1>
			<div className="delivery__block">
				<img className="delivery__image" src={flowerBasket} alt="Корзинка с цветами" />

				<div className="delivery__text">
					<h2 className="delivery__text_title">Быстро</h2>
					<p className="delivery__text_subtitle">
						Привозим цветы через два часа после оплаты заказа</p>
				</div>

				<div className="delivery__text">
					<h2 className="delivery__text_title">Бесплатно</h2>
					<p className="delivery__text_subtitle">
						При заказе от 500 рублей доставка в подарок</p>
				</div>

				<div className="delivery__text">
					<h2 className="delivery__text_title">Скидки</h2>
					<p className="delivery__text_subtitle">
						Забирайте сами и получайте скидку 5%</p>
				</div>

			</div>
		</section>
	)
}

export default Delivery;