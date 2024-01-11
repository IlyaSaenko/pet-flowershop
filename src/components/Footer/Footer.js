/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import iconVk from '../../../src/images/vk-icon.svg';
import iconTg from '../../../src/images/tg-icon.svg';
import iconWhats from '../../../src/images/wa-icon.svg';
import iconOdnoklassniki from '../../../src/images/odn-icon.svg';

// import { YMaps, Map } from "react-yandex-maps";

// const YandexMap = () => (
//   <YMaps>
//     <div>
//       <Map defaultState={{ center: [48.8866527839977,2.34310679732974], zoom: 9 }} />
//     </div>
//   </YMaps>
// );


// const AddressMap=()=>{
//   return(
//     <div className="AddressMap">
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2259.7560343308237!2d37.55060997709316!3d55.50177641129777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa94d81d12267%3A0x4a527e57016d731d!2z0YPQuy4g0KbQstC10YLQvtGH0L3QsNGPLCAzOCwg0JzQvtGB0LrQstCwLCAxNDIxNzE!5e0!3m2!1sru!2sru!4v1702598157818!5m2!1sru!2sru" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//     </div>

//   );
// }


function Footer() {
	return (
		<section className="footer" id="footer">
			<h1 className="footer__title">Контакты</h1>
			<div className="footer__block">
				<div className="footer__contacts">
					<p className="footer__adress">г. Москва, ул. Цветочная, 38</p>
					<p className="footer__number">+7 (495) 256-58-96</p>

					<nav className="footer__links">
						<a href="#" className="footer__link">
							<img className="footer__link_icon" src={iconVk} alt="Логотип ВКонтакте" />
						</a>
						<a href="#" className="footer__link">
							<img className="footer__link_icon" src={iconTg} alt="Логотип Телеграм" />
						</a>
						<a href="#" className="footer__link">
							<img className="footer__link_icon" src={iconWhats} alt="Логотип WhatsApp" />
						</a>
						<a href="#" className="footer__link">
							<img className="footer__link_icon" src={iconOdnoklassniki} alt="Логотип Одноклассники" />
						</a>
					</nav>
				</div>
        <iframe className="footer__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2259.7560343308237!2d37.55060997709316!3d55.50177641129777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa94d81d12267%3A0x4a527e57016d731d!2z0YPQuy4g0KbQstC10YLQvtGH0L3QsNGPLCAzOCwg0JzQvtGB0LrQstCwLCAxNDIxNzE!5e0!3m2!1sru!2sru!4v1702598447984!5m2!1sru!2sru" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>

		</section>
	)
}

export default Footer;