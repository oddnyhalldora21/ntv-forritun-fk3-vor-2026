import { useReducer } from 'react';

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
  }
}

export function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div className="card">
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}