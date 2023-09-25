import { useContext, useEffect, useState } from 'react';
import './IndexPage.scss';
import useSharedCounter from '../../hooks/useSharedCounter';
import { Provider, atom, useAtom, useAtomValue, useStore } from 'jotai';
import GeneralStore, { GeneralStoreAtoms } from '../../stores/GeneralStore';
import SubComponent from '../SubComponent/SubComponent';
import SubComponentStore, { SubComponentStoreAtoms } from '../../stores/SubComponentStore';
import PageStateContext, { PageStateContextProvider } from '../../contexts/PageContextProvider';

export const atomToggle = atom<boolean>(true);
atomToggle.debugLabel = "Index::atomToggle";

const IndexPage: React.FC = () => {
    // timer utiliser pour contrôle du rendu ou non de ce composant
    const [timer, setTimer] = useState(0);

    const [strState, setStrState] = useState("Initial state");

    const [count, setCount] = useState(0);
    const { hookCount, setSharedCount } = useSharedCounter();

    //From PageStateContext
    const { pageTestState, setPageTestState } = useContext(PageStateContext);


    const [testState, setTestState] = useState(true);
    const [testAtom, setTestAtom] = useAtom(atomToggle);

    const generalStore = useStore({ store: GeneralStore });
    const subComponentStore = useStore({ store: SubComponentStore });

    const a = generalStore.get(GeneralStoreAtoms.centreNameAtom);
    const a2 = generalStore.get(SubComponentStoreAtoms.anotherNameAtom);
    const a3 = generalStore.get(atomToggle);
    const b = subComponentStore.get(SubComponentStoreAtoms.anotherNameAtom);
    const b2 = subComponentStore.get(GeneralStoreAtoms.centreNameAtom);
    const b3 = subComponentStore.get(atomToggle);
    console.log('generalStore:', generalStore);
    console.log('generalStore::a:', a);
    console.log('generalStore::a2:', a2);
    console.log('generalStore::a3:', a3);
    console.log('subComponentStore:', subComponentStore);
    console.log('subComponentStore::b:', b);
    console.log('subComponentStore::b2:', b2);
    console.log('subComponentStore::b3:', b3);

    useEffect(() => {
        console.log("IndexPage::render::first");

        // const intervalId = setInterval(() => {
        //   setTimer(timer => timer + 1);
        // }, 2000);

        return () => {
            console.log("IndexPage::cleanup");
            // clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        console.log("IndexPage::render::counter-changes");

    }, [count]);

    console.log("Index::render");


    return (
        <div className="index-page">
            <PageStateContextProvider>
                <p className="left c3">&lt;IndexPage&gt;</p>
                <div className="ml-1 bl-dashed">

                    <div>
                        <h2>Index::timer = {timer}</h2>
                        <button onClick={() => setTestState(!testState)}>Index::setTestState(!testState) {!testState ? '🙈' : '🙉'}</button>
                        <button onClick={() => setTestAtom(!testAtom)} className='ml-5px'>Index::setTestAtom(!testAtom): {!testAtom ? '🙈' : '🙉'}</button>
                    </div>
                    <div className="card">
                        <p className="left c3">&lt;div&gt;</p>
                        <div>
                            <button onClick={() => setStrState("Updated state")}>Index::setStrState("Updated state") = {strState}</button>
                            <button onClick={() => setCount(count + 1)}>
                                count is {count}
                            </button>
                            <button onClick={() => setSharedCount(hookCount + 1)}>
                                hookCount is {hookCount}
                            </button>
                        </div>
                        <p className="left c3">&lt;div/&gt;</p>
                    </div>
                    <div className="sub-index">
                        <Provider store={SubComponentStore}>
                            <p className="left c4">&lt;Provider store=&quot;SubComponentStore&quot;&gt;</p>
                            <SubComponent indexPageTestState={testState} />
                            <p className="left c4">&lt;Provider/&gt;</p>
                        </Provider>
                    </div>
                </div>
                <p className="left c3">&lt;IndexPage/&gt;</p>
            </PageStateContextProvider>
        </div>
    );
};

export default IndexPage;
