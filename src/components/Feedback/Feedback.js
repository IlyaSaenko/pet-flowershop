/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Swiper from "swiper";
import userOne from '../../../src/images/user1.jpg';
import userTwo from '../../../src/images/user2.jpg';
import userThree from '../../../src/images/user3.jpg';
import userFour from '../../../src/images/user4.jpg';

const swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 300,
		modifier: 1,
		slideShadows: false,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});

function Feedback() {
	return (
		<section className="swiper mySwiper" src={swiper}>
			<h1 className="swiper__title">Отзывы</h1>
			<div className="swiper-wrapper">

				<div className="card swiper-slide">
					<div className="card__image">
						<img src={userOne} alt="Фото клиента" />
					</div>
					<div className="card__content">
						<span className="card__title">Марина</span>
						<span className="card__name">Любимый клиент</span>
						<p className="card__text">Получить цветы приятно, а дарить еще приятнее. Особенно, если их подготовили в Клумбе.
							Есть же в мире понимающие и преданные своему делу люди
						</p>
						{/* <button className="card__btn">Развернуть</button> */}
					</div>
				</div>

				<div className="card swiper-slide">
					<div className="card__image">
						<img src={userTwo} alt="Фото клиента" />
					</div>
					<div className="card__content">
						<span className="card__title">Надежда</span>
						<span className="card__name">Любимый клиент</span>
						<p className="card__text">Заказала красивейший, по крайней мере судя по картинке, букет гладиолусов с герберами.
						Собирали его где-то часа два, а доставили за сорок минут. Очень быстро, как по мне.
						Цветы пришли аккуратно завернутые и красиво упакованные
						</p>
						{/* <button className="card__btn">Развернуть</button> */}
					</div>
				</div>

				<div className="card swiper-slide">
					<div className="card__image">
						<img src={userThree} alt="Фото клиента" />
					</div>
					<div className="card__content">
						<span className="card__title">Иван</span>
						<span className="card__name">Любимый клиент</span>
						<p className="card__text">Сам не спец в цветах, но жене очень понравился оригинальный весенний букет,
							собранный с позитивным настроением. Оставляю свой положительный отзыв магазину. Конечно, буду рекомендовать.
							Лучший на районе цветочный! Молодцы!
						</p>
						{/* <button className="card__btn">Развернуть</button> */}
					</div>
				</div>

				<div className="card swiper-slide">
					<div className="card__image">
						<img src={userFour} alt="Фото клиента" />
					</div>
					<div className="card__content">
						<span className="card__title">Евгения</span>
						<span className="card__name">Любимый клиент</span>
						<p className="card__text">Ценю ваш сервис. Менеджеры всегда на связи по всем каналам,
						и постоянно пристально следят за курьерами. Цветы, разумеется, тоже на высоте. У таких людей всегда все схвачено!
						</p>
						{/* <button className="card__btn">Развернуть</button> */}
					</div>
				</div>
				
			</div>
		</section>
	)
}

export default Feedback;