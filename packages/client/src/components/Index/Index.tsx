import { useEffect, useState } from 'react';
import './Index.scss';
import useSharedCounter from '../../hooks/useSharedCounter';
import { atom, useAtom, useAtomValue, useStore } from 'jotai';
import GeneralStore, { centreNameAtom } from '../../stores/GeneralStore';

const atomToggle = atom<boolean>(true);

function Index() {
  // timer utiliser pour contrôle du rendu ou non du composant
  const [timer, setTimer] = useState(0);
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [strState, setStrState] = useState("Initial state");

  const [count, setCount] = useState(0);
  const {hookCount, setSharedCount} = useSharedCounter();

  const [testAtom, setTestAtom] = useAtom(atomToggle);
  const generalStore = useStore({store: GeneralStore});

  const a = generalStore.get(centreNameAtom);
  console.log('a:', a);
  
  
  
  useEffect(() => {
    console.log("Index::render::first");

    // const intervalId = setInterval(() => {
    //   setTimer(timer => timer + 1);
    // }, 2000);

    return () => {
      console.log("Index::cleanup");
      // clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    console.log("Index::render::counter-changes");

  }, [count, toggleEmoji]);

  console.log("Index::render");
  

  return (
    <div className="Index">
      <h1>Index timer = {timer}</h1>
      <button onClick={() => setTestAtom(!testAtom)}>Test changing an Atom state: {!testAtom ? '🙈' : '🙉'}</button>
      {testAtom &&
      <div className="card">
        <button onClick={() => setToggleEmoji(!toggleEmoji)}>Render Index again {toggleEmoji ? '🙈' : '🙉'}</button>
        <br/>
        <button onClick={() => setStrState("Updated state")}>StrState = {strState}</button>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setSharedCount(hookCount + 1)}>
          hookCount is {hookCount}
        </button>
      </div>
      }
    </div>
  );
}

export default Index;
