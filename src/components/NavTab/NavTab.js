import React from "react";
import { HashLink } from "react-router-hash-link";

function NavTab() {
	return (
		<section className="navtab">
			<div className="navtab__section">
				<HashLink smooth to="#catalog" className="navtab__button">в каталог</HashLink>
			</div>
		</section>
	);
}

export default NavTab;