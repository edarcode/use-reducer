import { useCounter } from "../hooks/useCounter";
import css from "./style.module.css";

export default function App() {
	const {
		valueCounter,
		stepCounter,
		amountActionsCounter: amountActions,
		addCounter,
		substractCounter,
		addStepCounter,
		resetCounter
	} = useCounter();

	return (
		<div className={css.App}>
			<span>contador: {valueCounter}</span>
			<span>step: {stepCounter}</span>
			<span>cantidad de acciones: {amountActions}</span>
			<button onClick={addCounter}>sumar</button>
			<button onClick={substractCounter}>restar</button>
			<button onClick={addStepCounter}>sumar step</button>
			<button onClick={resetCounter}>reiniciar todo</button>
		</div>
	);
}
