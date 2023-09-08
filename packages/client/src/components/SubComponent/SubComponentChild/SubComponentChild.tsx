import { useEffect, useState } from 'react';
import './SubComponentChild.scss';
import { useStore } from 'jotai';
import GeneralStore, { centreNameAtom } from '../../../stores/GeneralStore';
import SubComponentStore, { anotherAtom } from '../../../stores/SubComponentStore';
import { atomToggle } from '../../Index/Index';


function SubComponentChild() {
    const generalStore = useStore({ store: GeneralStore });
    const subComponentStore = useStore({ store: SubComponentStore });

    const a = generalStore.get(centreNameAtom);
    const a2 = generalStore.get(anotherAtom);
    const a3 = generalStore.get(atomToggle);
    const b = subComponentStore.get(anotherAtom);
    const b2 = subComponentStore.get(centreNameAtom);
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
        <div className="SubComponentChild">
            <p className="left indent4">&lt;SubComponentChild&gt;</p>
            <p>ici val from substore</p>
            <p className="left indent4  ">&lt;SubComponentChild/&gt;</p>
        </div>
    );
}

export default SubComponentChild;