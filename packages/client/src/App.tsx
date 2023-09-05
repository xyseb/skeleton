import { useEffect, useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import jotaiLogo from './assets/jotai.png';
import './App.scss';
//import Index from './components/Index';
import Index from './components/Index/Index';
import useSharedCounter from './hooks/useSharedCounter';

function App() {
  // timer utiliser pour contrôle du rendu ou non du composant
  const [timer, setTimer] = useState(0)
  const [indexIsVisible, setIndexIsVisible] = useState(true);

  const {hookCount, setSharedCount} = useSharedCounter();
  // Créez une ref pour stocker la valeur précédente de hookCount
  const prevHookCountRef = useRef<number | null>(null);

  useEffect(() => {
    console.log("App first time render");
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 2000);
    return () => {
      console.log("App cleanup");
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    console.log("App render on hookCount changes", hookCount);

    // Comparez la valeur actuelle de hookCount avec la valeur précédente
    if (prevHookCountRef.current !== null && prevHookCountRef.current !== hookCount) {
      // hookCount a changé, faites quelque chose en réponse au changement
    }

    // Mettez à jour la valeur de la ref avec la nouvelle valeur de hookCount
    prevHookCountRef.current = hookCount;
  }, [hookCount]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://jotai.org" target="_blank">
          <img src={jotaiLogo} className="logo" alt="Jotai logo" />
        </a>
      </div>
      <h1>App timer = {timer}</h1>
      <button onClick={() => setIndexIsVisible(!indexIsVisible)}>indexIsVisible = {indexIsVisible ? "True" :"False"}</button>
      <br/>
      <br/>
      {indexIsVisible && <Index/>}
      <div className='debugInfos'>
        <p>Index::strState = 'local to Index'</p>
        <p>Index::count = ''</p>
        <p>Index::hookCount = '{hookCount}'</p>
      </div>
    </div>
  );
}

export default App
