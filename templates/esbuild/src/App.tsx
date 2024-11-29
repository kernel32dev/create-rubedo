import { State } from "rubedo";
import { css } from "rubedo-dom";

export default function App() {
    const counter = new State(0);

    const increment = () => counter.mut(x => x + 1);

    return (
        <div class="container">
            <h1 class="title">Rubedo + Esbuild</h1>
            <div class="counter">
                <p>The counter value is: {counter}</p>
                <button class="button" onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

css`
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f9;
}

.title {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
}

.counter {
    text-align: center;
}

.button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: #0056b3;
}

.button:active {
    background-color: #004a99;
}
`
