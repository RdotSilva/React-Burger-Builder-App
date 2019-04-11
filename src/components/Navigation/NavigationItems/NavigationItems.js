import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
	<ul className={styles.NavigationItems}>
		<li>
			<NavigationItem link="/" active>
				Burger Builder
			</NavigationItem>
			<NavigationItem link="/">Checkout</NavigationItem>
		</li>
	</ul>
);

export default navigationItems;
