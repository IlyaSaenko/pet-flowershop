import React from "react";
import bouquetOne from '../../../src/images/bouquet1.jpg';
import bouquetTwo from '../../../src/images/bouquet2.jpg';
import bouquetThree from '../../../src/images/bouquet5.jpg';
import bouquetFour from '../../../src/images/bouquet6.jpg';
import bouquetFife from '../../../src/images/bouquet13.jpg';
import bouquetSix from '../../../src/images/bouquet9.jpg';
import bouquetSeven from '../../../src/images/bouquet11.jpg';
import bouquetEight from '../../../src/images/bouquet12.jpg';

function Examples() {
	return(
		<section className="examples">
			<h1 className="examples__title">Наши работы</h1>
			<div className="examples__photo">
				<img className="examples__image" src={bouquetOne} alt="Букет цветов"></img>
				<img className="examples__image" src={bouquetTwo} alt="Букет цветов"></img>
				<img className="examples__image" src={bouquetThree} alt="Букет цветов"></img>
				<img className="examples__image" src={bouquetFour} alt="Букет цветов"></img>
				<img className="examples__image" src={bouquetFife} alt="Букет цветов"></img>
				<img className="examples__image" src={bouquetSix} alt="Букет цветов"></img>
				<img className="examples__image" src={bouquetSeven} alt="Букет цветов"></img>
				<img className="examples__image" src={bouquetEight} alt="Букет цветов"></img>
			</div>
		</section>
	)
}

export default Examples;