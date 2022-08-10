export const initialStateCounter = {
	valueCounter: 0,
	stepCounter: 1,
	amountActionsCounter: 0
};

export const reducerCounter = (counter, { type, payload }) => {
	const { valueCounter, stepCounter, amountActionsCounter } = counter;
	switch (type) {
		case "addCounter":
			return {
				...counter,
				valueCounter: valueCounter + payload,
				amountActionsCounter: amountActionsCounter + 1
			};

		case "substractCounter":
			return {
				...counter,
				valueCounter: valueCounter - stepCounter,
				amountActionsCounter: amountActionsCounter + 1
			};

		case "addStepCounter":
			return {
				...counter,
				stepCounter: stepCounter + 1
			};

		case "resetCounter":
			return initialStateCounter;

		default:
			throw TypeError("err action");
	}
};
