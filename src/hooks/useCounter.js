import { useState } from "react";

const initialState = {
	valueCounter: 0,
	stepCounter: 1,
	amountActionsCounter: 0
};

export const useCounter = () => {
	const [counter, setCounter] = useState(initialState);

	const { valueCounter, stepCounter: step, amountActionsCounter } = counter;

	const addCounter = () => {
		setCounter({
			...counter,
			valueCounter: valueCounter + step,
			amountActionsCounter: amountActionsCounter + 1
		});
	};
	const substractCounter = () => {
		setCounter({
			...counter,
			valueCounter: valueCounter - step,
			amountActionsCounter: amountActionsCounter + 1
		});
	};
	const addStepCounter = () => {
		setCounter({
			...counter,
			stepCounter: step + 1
		});
	};
	const resetCounter = () => {
		setCounter(initialState);
	};

	return {
		...counter,
		addCounter,
		substractCounter,
		addStepCounter,
		resetCounter
	};
};
