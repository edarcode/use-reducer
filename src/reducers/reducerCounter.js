export const initialStateCounter = {
	valueCounter: 0,
	stepCounter: 1,
	amountActionsCounter: 0
};

export const reducerCounter = (counter, { type, payload }) => {
	const { valueCounter, stepCounter, amountActionsCounter } = counter;
	let newState = null;

	switch (type) {
		case "addCounter":
			newState = {
				...counter,
				valueCounter: valueCounter + payload,
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
			newState = initialStateCounter;
			break;

		default:
			throw TypeError("err action");
	}

	return newState;
};
