import { useEffect, useState } from 'react';
import './DebugInfo.scss';
import useSharedCounter from '../../hooks/useSharedCounter';
import { atom, useAtom, useAtomValue, useStore } from 'jotai';
import GeneralStore, { GeneralStoreAtoms } from '../../stores/GeneralStore';

//const atomToggle = atom<boolean>(true);

const DebugInfo:React.FC = () => {
  // timer utiliser pour contrôle du rendu ou non du composant
  const [timer, setTimer] = useState(0);
  const [toggleEmoji, setToggleEmoji] = useState(false);
  const [strState, setStrState] = useState("Initial state");

  const [count, setCount] = useState(0);
  const {hookCount, setSharedCount} = useSharedCounter();

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

  }, [count, toggleEmoji]);

  console.log("Index::render");
  

  return (
    <div className="debug-info">
        {/* <h1>DebugInfo timer = {timer}</h1> */}
        <p>DebugInfo::strState = &apos;local to Index&apos;</p>
        <p>DebugInfo::count = &apos;&apos;</p>
        <p>DebugInfo::hookCount = &apos;{hookCount}&apos;</p>
        {/* <p>DebugInfo::GeneralStore::atom = &apos;{testAtom}&apos;</p> */}
    </div>
  );
};

export default DebugInfo;
