import { useEffect, useState, useRef } from 'react';
import { DevTools } from 'jotai-devtools';
import { Provider as JotaiProvider, useAtomValue } from "jotai";
import GeneralStore, { GeneralStoreAtoms } from './stores/GeneralStore';
import useSharedCounter from './hooks/useSharedCounter';

import IndexPage from './components/Index/IndexPage';
import DebugInfo from './components/DebugInfo/DebugInfo';

import './App.scss';

const App:React.FC = () => {
    const withDevTools = true;
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
            { withDevTools && <DevTools /> }
            <div className="app">
                <p className="left c1">&lt;App&gt;</p>
                <div className="ml-1 bl-app">
                    <p className="left c2">&lt;Provider store=&quot;GeneralStore&quot;&gt;</p>
                    <JotaiProvider store={GeneralStore}>
                        <div className="ml-2">
                            <h2 className="left">App::timer = {timer}</h2>
                            <button onClick={() => setIndexIsVisible(!indexIsVisible)}>indexIsVisible = {indexIsVisible ? "True" : "False"}</button>
                            {indexIsVisible && <IndexPage />}
                            <div className="debug">
                                <p className="left c1">&lt;div className=&quot;app-info&quot;&gt;</p>
                                <div className='app-info ml-1'>
                                    <p>Index::strState = &apos;local to Index&apos;</p>
                                    <p>Index::count = &apos;&apos;</p>
                                    <p>Index::hookCount = &apos;{hookCount}&apos;</p>
                                    <p>Index::useAtomValue(centreNameAtom) = &apos;{centreNameAtomValue}&apos;</p>
                                </div>
                                <p className="left c1">&lt;/div&gt;</p>
                                <p className="left c42">&lt;DebugInfo&gt;</p>
                                <DebugInfo />
                                <p className="left c42">&lt;/DebugInfo&gt;</p>
                            </div>
                        </div>
                    </JotaiProvider>
                    <p className="left c2">&lt;Provider/&gt;</p>
                </div>
                <p className="left c1">&lt;App/&gt;</p>
            </div>
        </>
    );
};

export default App;
