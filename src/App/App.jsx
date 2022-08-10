import { useReducer } from "react";
import {
	initialStateCounter,
	reducerCounter
} from "../reducers/reducerCounter";
import css from "./style.module.css";

export default function App() {
	const [counter, dispatch] = useReducer(reducerCounter, initialStateCounter);
	const { valueCounter, stepCounter, amountActionsCounter } = counter;

	return (
		<div className={css.App}>
			<span>contador: {valueCounter}</span>
			<span>step: {stepCounter}</span>
			<span>cantidad de acciones: {amountActionsCounter}</span>
			<button onClick={() => dispatch({ type: "addCounter", payload: 50 })}>
				sumar
			</button>
			<button onClick={() => dispatch({ type: "substractCounter" })}>
				restar
			</button>
			<button onClick={() => dispatch({ type: "addStepCounter" })}>
				sumar step
			</button>
			<button onClick={() => dispatch({ type: "resetCounter" })}>
				reiniciar todo
			</button>
		</div>
	);
}
