import { useReducer } from "react";

const initialState = {
	valueCounter: 0,
	stepCounter: 1,
	amountActionsCounter: 0
};

export const useCounter = () => {
	const [counter, dispatch] = useReducer(reducerCounter, initialState);

	return {
		...counter,
		dispatch
	};
};

const reducerCounter = (counter, action) => {
	const { valueCounter, stepCounter, amountActionsCounter } = counter;
	let newState = null;

	switch (action) {
		case "addCounter":
			newState = {
				...counter,
				valueCounter: valueCounter + stepCounter,
				amountActionsCounter: amountActionsCounter + 1
			};
			break;
		case "substractCounter":
			newState = {
				...counter,
				valueCounter: valueCounter - stepCounter,
				amountActionsCounter: amountActionsCounter + 1
			};
			break;
		case "addStepCounter":
			newState = {
				...counter,
				stepCounter: stepCounter + 1
			};
			break;
		case "resetCounter":
			newState = initialState;
			break;

		default:
			throw TypeError("err action");
	}

	return newState;
};
