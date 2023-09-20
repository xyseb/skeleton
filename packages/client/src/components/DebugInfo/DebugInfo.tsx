import { useEffect, useState } from 'react';
import './DebugInfo.scss';
import useSharedCounter from '../../hooks/useSharedCounter';
import { atom, useAtom, useAtomValue, useStore } from 'jotai';
import GeneralStore, { GeneralStoreAtoms } from '../../stores/GeneralStore';

const DebugInfo:React.FC = () => {
  // timer utiliser pour contrôle du rendu ou non du composant
  const [timer, setTimer] = useState(0);

  const [count, setCount] = useState(0);
  const {hookCount, setSharedCount, getSharedCount} = useSharedCounter();

//   const [testAtom, setTestAtom] = useAtom(atomToggle);
//   const generalStore = useStore({store: GeneralStore});

//   const a = generalStore.get(centreNameAtom);
//   console.log('a:', a);
//   console.log();
  
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

  }, [count]);

  console.log("Index::render");
  

  return (
    <div className="debug-info ml-1">
        {/* <h1>DebugInfo timer = {timer}</h1> */}
        {/* <p>DebugInfo::GeneralStore::atom = &apos;{testAtom}&apos;</p> */}
        <p>Index::count = &apos;&apos;</p>
        <p>Index::useSharedCounter() = &apos;{hookCount}&apos;</p>
        <p>Index::useSharedCounter().getSharedCount() = &apos;{getSharedCount()}&apos;</p>
        <p>Index::useAtomValue(centreNameAtom) = &apos;&apos;</p>
    </div>
  );
};

export default DebugInfo;
