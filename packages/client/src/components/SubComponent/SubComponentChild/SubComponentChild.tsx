import { useEffect, useState } from 'react';
import './SubComponentChild.scss';
import { useAtomValue, useStore } from 'jotai';
import GeneralStore, { GeneralStoreAtoms } from '../../../stores/GeneralStore';
import SubComponentStore, { SubComponentStoreAtoms } from '../../../stores/SubComponentStore';
import { atomToggle } from '../../Index/IndexPage';

interface ownProps {
    indexPageTestState:boolean;
}

const SubComponentChild: React.FC<ownProps> = (props) => {
    const centreNameAtomValue = useAtomValue(GeneralStoreAtoms.centreNameAtom);

    const generalStore = useStore({ store: GeneralStore });
    const subComponentStore = useStore(SubComponentStore);

    const a = generalStore.get(GeneralStoreAtoms.centreNameAtom);
    const a2 = generalStore.get(SubComponentStoreAtoms.anotherNameAtom);
    const a3 = generalStore.get(atomToggle);
    const b = subComponentStore.get(SubComponentStoreAtoms.anotherNameAtom);
    const b2 = subComponentStore.get(GeneralStoreAtoms.centreNameAtom);
    const b3 = subComponentStore.get(atomToggle);
    console.log('SubComponentChild::generalStore:', generalStore);
    console.log('SubComponentChild::generalStore::a:', a);
    console.log('SubComponentChild::generalStore::a2:', a2);
    console.log('SubComponentChild::generalStore::a3:', a3);
    console.log('SubComponentChild::subComponentStore:', subComponentStore);
    console.log('SubComponentChild::subComponentStore::b:', b);
    console.log('SubComponentChild::subComponentStore::b2:', b2);
    console.log('SubComponentChild::subComponentStore::b3:', b3);

    useEffect(() => {
        console.log("SubComponentChild::render::first");

        // const intervalId = setInterval(() => {
        //   setTimer(timer => timer + 1);
        // }, 2000);

        return () => {
            console.log("SubComponentChild::cleanup");
            // clearInterval(intervalId);
        };
    }, []);

    console.log("SubComponentChild::render");


    return (
        <div className="sub-component-child ml-1">
            <p className="left">&lt;SubComponentChild&gt;</p>
            <div className="ml-1 bl-sub-component-child">
                <p>Index::testState (P.D.) = &apos; {!props.indexPageTestState ? '🙈' : '🙉'}&apos;</p>
                <p>Index::count = &apos;&apos;</p>
                <p>Index::hookCount = &apos;{/*hookCount*/}&apos;</p>
                <p>Index::useAtomValue(centreNameAtom) = &apos;{centreNameAtomValue}&apos;</p>
            </div>
            <p className="left">&lt;SubComponentChild/&gt;</p>
        </div>
    );
};

export default SubComponentChild;
