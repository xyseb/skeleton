import { useEffect, useState, useRef } from 'react';
import { DevTools } from 'jotai-devtools';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Provider as JotaiProvider, useAtomValue } from "jotai";
import GeneralStore, { GeneralStoreAtoms } from './stores/GeneralStore';
// import StoreProvider from './stores/GeneralStore2';
import useSharedCounter from './hooks/useSharedCounter';

import IndexPage from './components/Index/IndexPage';
import GeneralProviderLessAtomsPage from './components/GeneralProviderLessAtomsPage/GeneralProviderLessAtomsPage';
import DebugInfo from './components/DebugInfo/DebugInfo';

import './App.scss';

import { test2Atom } from './stores/GeneralAtoms';
import StoreProvider from './stores/GeneralStore2';
import UseStatePage from './components/UseStatePage/UseStatePage';

const App: React.FC = () => {
    const isDev = import.meta.env.MODE === 'development';
    // timer utiliser pour contrôle du rendu ou non du composant
    const [timer, setTimer] = useState(0);

    const [testState, setTestState] = useState(true);

    const { hookCount, setSharedCount, getSharedCount } = useSharedCounter();
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
            {isDev && <DevTools />}
            <div className="app">
                <p className="left c1">&lt;App&gt;</p>
                <div className="ml-1 bl-app">
                    <header>
                        <p className="left c1">&lt;header&gt;</p>
                        <p className="left c1 ml-1">&lt;nav&gt;</p>
                        <nav className='ml-2'>
                            <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav'} to="/home"><span>HOME</span></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav'} to="/use-state"><span>use-state</span></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav'} to="/provider-less-atoms"><span>provider-less-atoms</span></NavLink>
                            {/* <NavLink className={({ isActive }) => isActive ? 'nav is-active' : 'nav' } to="/404"><span>404</span></NavLink> */}
                        </nav>
                        <p className="left c1 ml-1">&lt;/nav&gt;</p>
                        <p className="left c1">&lt;/header&gt;</p>
                    </header>
                    <Routes>
                        <Route path="/provider-less-atoms" element={<GeneralProviderLessAtomsPage />} />
                    </Routes>
                    <p className="left c2">&lt;Provider store=&quot;GeneralStore&quot;&gt;</p>
                    <JotaiProvider store={GeneralStore}>
                        <div className="ml-2">
                            <h2 className="left">App::timer = {timer}</h2>
                            <button onClick={() => setTestState(!testState)}>App::setTestState(!testState) {!testState ? '🙈' : '🙉'}</button>
                            <section>
                                <Routes>
                                    <Route path="/" element={<IndexPage />}>
                                        <Route path="/home" element={<IndexPage />} />
                                    </Route>
                                    {/* <Route path="/ctx" element={<CentreContextPage />} /> */}
                                    <Route path="/use-state" element={<UseStatePage />} />
                                    <Route path="/provider-less-atoms" element={<GeneralProviderLessAtomsPage />} />
                                    {/* <Route path="/404" element={<NotFoundPage/>}/> */}
                                </Routes>
                            </section>
                            <div className="debug">
                                <p className="left c1">&lt;div className=&quot;app-info&quot;&gt;</p>
                                <div className='app-info ml-1'>
                                    {/* <p>Index::strState = &apos;local to Index&apos;</p> */}
                                    <p>App::testState = &apos;{!testState ? '🙈' : '🙉'}&apos;</p>
                                    <p>Index::count = &apos;&apos;</p>
                                    <p>Index::useSharedCounter() = &apos;{hookCount}&apos;</p>
                                    <p>Index::useSharedCounter().getSharedCount() = &apos;{getSharedCount()}&apos;</p>
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
