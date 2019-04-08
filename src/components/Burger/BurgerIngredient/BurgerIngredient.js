import React from 'react';
import styles from './BurgerIngredient.module.css';

const burgerIngredient = props => {
	let ingredient = null;

	switch (props.type) {
		case 'bread-bottom':
			ingredient = <div className={styles.BreadBottom} />;
			break;
		case 'bread-top':
			ingredient = (
				<div className={styles.BreadTop}>
					<div className={styles.Seeds1} />
					<div className={styles.Seeds2} />
				</div>
			);
			break;
		case 'meat':
			ingredient = <div className={styles.Meat} />;
			break;
	}
};

export default burgerIngredient;
