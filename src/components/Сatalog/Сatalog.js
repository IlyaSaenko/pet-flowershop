import React from "react";
import roses from '../../../src/images/roses.png';
import tulips from '../../../src/images/tulips.png';
import chrysanthemums from '../../../src/images/chrysanthemums.png';
import pions from '../../../src/images/pions.png';
import chamomiles from '../../../src/images/chamomiles.png';
import orchids from '../../../src/images/orchids.png';



function Catalog() {
	return (
		<section className="catalog">
			<h1 className="catalog__title">каталог</h1>
			<ul className="catalog__bouquets">

				<li className="catalog__bouquet">
					<img className="catalog__bouquet_img" src={roses} alt="Букет из красных роз" />
					<h2 className="catalog__bouquet_title">Розы</h2>
					<h3 className="catalog__bouquet_subtitle">45 руб. — 1 шт.</h3>
					<button className="catalog__bouquet_purchase adding"><span>В коризину</span></button>
				</li>

				<li className="catalog__bouquet">
					<img className="catalog__bouquet_img" src={tulips} alt="Букет из тюльпанов" />
					<h2 className="catalog__bouquet_title">Тюльпаны</h2>
					<h3 className="catalog__bouquet_subtitle">40 руб. — 1 шт.</h3>
					<button className="catalog__bouquet_purchase adding"><span>В коризину</span></button>
				</li>

				<li className="catalog__bouquet">
					<img className="catalog__bouquet_img" src={chrysanthemums} alt="Букет из хризантем" />
					<h2 className="catalog__bouquet_title">Хризантемы</h2>
					<h3 className="catalog__bouquet_subtitle">80 руб. — 1 шт.</h3>
					<button className="catalog__bouquet_purchase adding"><span>В коризину</span></button>
				</li>

				<li className="catalog__bouquet">
					<img className="catalog__bouquet_img" src={pions} alt="Букет из пионов" />
					<h2 className="catalog__bouquet_title">Пионы</h2>
					<h3 className="catalog__bouquet_subtitle">45 руб. — 1 шт.</h3>
					<button className="catalog__bouquet_purchase adding"><span>В коризину</span></button>
				</li>

				<li className="catalog__bouquet">
					<img className="catalog__bouquet_img" src={chamomiles} alt="Букет из ромашек" />
					<h2 className="catalog__bouquet_title">Ромашки</h2>
					<h3 className="catalog__bouquet_subtitle">35 руб. — 1 шт.</h3>
					<button className="catalog__bouquet_purchase adding"><span>В коризину</span></button>
				</li>

				<li className="catalog__bouquet">
					<img className="catalog__bouquet_img" src={orchids} alt="Букет из ромашек" />
					<h2 className="catalog__bouquet_title">Орхидеи</h2>
					<h3 className="catalog__bouquet_subtitle">70 руб. — 1 шт.</h3>
					<button className="catalog__bouquet_purchase adding"><span>В коризину</span></button>
				</li>

			</ul>
		</section>
	)
}

export default Catalog;