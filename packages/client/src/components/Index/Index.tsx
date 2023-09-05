import { useEffect, useState } from 'react';
import './Index.scss';
import useSharedCounter from '../../hooks/useSharedCounter';

function Index() {
  // timer utiliser pour contrôle du rendu ou non du composant
  const [timer, setTimer] = useState(0);
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [strState, setStrState] = useState("Initial state");

  const [count, setCount] = useState(0);
  const {hookCount, setSharedCount} = useSharedCounter();

  useEffect(() => {
    console.log("Index first time render");

    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 2000);

    return () => {
      console.log("Index cleanup");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log("Index render on count changes");

  }, [count, toggleEmoji]);

console.log('render!!!');


  return (
    <div className="Index">
      <h1>Index timer = {timer}</h1>

      <div className="card">
        <button onClick={() => setToggleEmoji(!toggleEmoji)}>Render Index again {toggleEmoji ? '🙈' : '🙉'}</button>
        <br/>
        <button onClick={() => setStrState("Updated state")}>StrState = {strState}</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setSharedCount(hookCount + 1)}>
          hookCount is {hookCount}
        </button>
      </div>
    </div>
  )
};

export default Index;
