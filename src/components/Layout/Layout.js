import React, { Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	render() {
		return (
			<React.Fragment>
				<Toolbar />
				<SideDrawer />
				<main className={styles.Content}>{this.props.children}</main>
			</React.Fragment>
		);
	}
}

export default Layout;
