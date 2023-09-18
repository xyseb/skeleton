import { useEffect, useState, useRef } from 'react';
import { DevTools } from 'jotai-devtools';
import { Provider as JotaiProvider, useAtomValue } from "jotai";
import GeneralStore, { GeneralStoreAtoms } from './stores/GeneralStore';
import useSharedCounter from './hooks/useSharedCounter';

import IndexPage from './components/Index/IndexPage';
import DebugInfo from './components/DebugInfo/DebugInfo';

// import reactLogo from './assets/react.svg';
// import jotaiLogo from './assets/jotai.png';
import './App.scss';

const App:React.FC = () => {
    // timer utiliser pour contrôle du rendu ou non du composant
    const [timer, setTimer] = useState(0);
    const [indexIsVisible, setIndexIsVisible] = useState(true);

    const { hookCount, setSharedCount } = useSharedCounter();
    // Créez une ref pour stocker la valeur précédente de hookCount
    const prevHookCountRef = useRef<number | null>(null);

    const centreNameAtomValue = useAtomValue(GeneralStoreAtoms.centreNameAtom);

    useEffect(() => {
        console.log("App::render::first");
        // const intervalId = setInterval(() => {
        //   setTimer(timer => timer + 1)
        // }, 2000);

        return () => {
            console.log("App::cleanup");
            // clearInterval(intervalId);
        };
    }, []);
    console.log("App::render");

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
        <>
            <DevTools />
            <div className="app">
                <p className="left c1">&lt;App&gt;</p>
                <p className="left c2 indent1">&lt;Provider store=&quot;GeneralStore&quot;&gt;</p>
                <JotaiProvider store={GeneralStore}>
                    {/* <div>
                        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                            <img src="/vite.svg" className="logo" alt="Vite logo" />
                        </a>
                        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                        <a href="https://jotai.org" target="_blank" rel="noreferrer">
                            <img src={jotaiLogo} className="logo" alt="Jotai logo" />
                        </a>
                    </div> */}
                    <h2 className="indent1">App::timer = {timer}</h2>
                    <div className="indent1"><button onClick={() => setIndexIsVisible(!indexIsVisible)}>indexIsVisible = {indexIsVisible ? "True" : "False"}</button></div>
                    {indexIsVisible && <IndexPage />}
                    <div className="debug">
                        <div className='app-info'>
                            <p>Index::strState = &apos;local to Index&apos;</p>
                            <p>Index::count = &apos;&apos;</p>
                            <p>Index::hookCount = &apos;{hookCount}&apos;</p>
                            <p>Index::useAtomValue(centreNameAtom) = &apos;{centreNameAtomValue}&apos;</p>
                        </div>
                        <DebugInfo />
                    </div>
                </JotaiProvider>
                <p className="left c2 indent1">&lt;Provider/&gt;</p>
                <p className="left c1">&lt;App/&gt;</p>
            </div>
        </>
    );
};

export default App;
