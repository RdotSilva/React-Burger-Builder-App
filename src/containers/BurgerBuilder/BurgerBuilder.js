import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	};

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
	};

	addIngredientHandler = type => {};

	render() {
		return (
			<React.Fragment>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls />
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;
