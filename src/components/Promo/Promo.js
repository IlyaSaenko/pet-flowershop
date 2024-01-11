import React from "react";
import { HashLink } from "react-router-hash-link";
import promoimage from '../../../src/images/promo-img.jpg'

function Promo() {
	return (
		<section className="promo">
			<div className="promo__text-block">
				<h1 className="promo__title">Клумба</h1>
				<p className="promo__subtitle">Тот самый цветочный, который все советуют</p>
				{/* <div className="promo__section-button"> */}
					<HashLink smooth to="#feedback" className="promo__section-button">о нас</HashLink>
				{/* </div> */}
			</div>
			<img className="promo__image" src={promoimage} alt="Девушка с цветами" />
		</section>
	);
}

export default Promo;