import { useEffect, useState } from 'react';
import './IndexPage.scss';
import useSharedCounter from '../../hooks/useSharedCounter';
import { Provider, atom, useAtom, useAtomValue, useStore } from 'jotai';
import GeneralStore, { GeneralStoreAtoms } from '../../stores/GeneralStore';
import SubComponent from '../SubComponent/SubComponent';
import SubComponentStore, { SubComponentStoreAtoms } from '../../stores/SubComponentStore';

export const atomToggle = atom<boolean>(true);
atomToggle.debugLabel = "Index::atomToggle";

const IndexPage:React.FC = () => {
    // timer utiliser pour contrôle du rendu ou non du composant
    const [timer, setTimer] = useState(0);
    const [toggleEmoji, setToggleEmoji] = useState(false);
    const [strState, setStrState] = useState("Initial state");

    const [count, setCount] = useState(0);
    const { hookCount, setSharedCount } = useSharedCounter();

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

    }, [count, toggleEmoji]);

    console.log("Index::render");


    return (
        <div className="index-page">
            <p className="left c3">&lt;IndexPage&gt;</p>
            <div className="ml-1 bl-index-page">

            <div>
                <h2>Index::timer = {timer}</h2>
                <button onClick={() => setTestAtom(!testAtom)}>Test changing an Atom state: {!testAtom ? '🙈' : '🙉'}</button>
            </div>
            {testAtom &&
                <div className="card">
                    <p className="left c3">&lt;div&gt;</p>
                    <div>
                        <button onClick={() => setToggleEmoji(!toggleEmoji)}>Render Index again {toggleEmoji ? '🙈' : '🙉'}</button>
                        <br />
                        <button onClick={() => setStrState("Updated state")}>StrState = {strState}</button>
                        <button onClick={() => setCount(count + 1)}>
                            count is {count}
                        </button>
                        <button onClick={() => setSharedCount(hookCount + 1)}>
                            hookCount is {hookCount}
                        </button>
                    </div>
                    <p className="left c3">&lt;div/&gt;</p>
                </div>
            }
            <div className="sub-index">
                <Provider store={SubComponentStore}>
                    <p className="left c4">&lt;Provider store=&quot;SubComponentStore&quot;&gt;</p>
                    <SubComponent />
                    <p className="left c4">&lt;Provider/&gt;</p>
                </Provider>
            </div>
            </div>
            <p className="left c3">&lt;IndexPage/&gt;</p>
        </div>
    );
};

export default IndexPage;
