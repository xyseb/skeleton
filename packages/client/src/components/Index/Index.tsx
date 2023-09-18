import { useEffect, useState } from 'react';
import './Index.scss';
import useSharedCounter from '../../hooks/useSharedCounter';
import { Provider, atom, useAtom, useAtomValue, useStore } from 'jotai';
import GeneralStore, { GeneralStoreAtoms } from '../../stores/GeneralStore';
import SubComponent from '../SubComponent/SubComponent';
import SubComponentStore, { anotherAtom } from '../../stores/SubComponentStore';

export const atomToggle = atom<boolean>(true);
atomToggle.debugLabel = "Index::atomToggle";

function Index() {
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
    const a2 = generalStore.get(anotherAtom);
    const a3 = generalStore.get(atomToggle);
    const b = subComponentStore.get(anotherAtom);
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
            <p className="left c3 indent2">&lt;Index&gt;</p>
            <h2>Index::timer = {timer}</h2>
            <button onClick={() => setTestAtom(!testAtom)}>Test changing an Atom state: {!testAtom ? '🙈' : '🙉'}</button>
            {testAtom &&
                <div className="card">
                    <p className="left c4 indent1">&lt;div&gt;</p>
                    <button onClick={() => setToggleEmoji(!toggleEmoji)}>Render Index again {toggleEmoji ? '🙈' : '🙉'}</button>
                    <br />
                    <button onClick={() => setStrState("Updated state")}>StrState = {strState}</button>
                    <button onClick={() => setCount(count + 1)}>
                        count is {count}
                    </button>
                    <button onClick={() => setSharedCount(hookCount + 1)}>
                        hookCount is {hookCount}
                    </button>
                    <p className="left c4 indent1">&lt;div/&gt;</p>
                </div>
            }
            <div className="SubIndex">
                <Provider store={SubComponentStore}>
                    <p className="left c4 indent3">&lt;Provider store="SubComponentStore"&gt;</p>
                    <SubComponent />
                    <p className="left c4 indent3">&lt;Provider/&gt;</p>
                </Provider>
            </div>
            <p className="left c3 indent2">&lt;Index/&gt;</p>
        </div>
    );
}

export default Index;
