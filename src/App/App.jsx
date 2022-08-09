import { useCounter } from "../hooks/useCounter";
import css from "./style.module.css";

export default function App() {
	const { valueCounter, stepCounter, amountActionsCounter, dispatch } =
		useCounter();

	return (
		<div className={css.App}>
			<span>contador: {valueCounter}</span>
			<span>step: {stepCounter}</span>
			<span>cantidad de acciones: {amountActionsCounter}</span>
			<button onClick={() => dispatch("addCounter")}>sumar</button>
			<button onClick={() => dispatch("substractCounter")}>restar</button>
			<button onClick={() => dispatch("addStepCounter")}>sumar step</button>
			<button onClick={() => dispatch("resetCounter")}>reiniciar todo</button>
		</div>
	);
}
