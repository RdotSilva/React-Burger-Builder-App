import React from 'React';
import styles from './NavigationItem.module.css';

const navigationItem = props => (
	<li className={styles.NavigationItem}>
		<a href="/">A link</a>
	</li>
);

export default navigationItem;
