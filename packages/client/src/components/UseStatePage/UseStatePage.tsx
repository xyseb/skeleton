import { useEffect, useMemo, useRef, useState } from 'react';
import './UseStatePage.scss';

// export const atomToggle = atom<boolean>(true);
// atomToggle.debugLabel = "UseStatePage::atomToggle";

const UseStatePage:React.FC = () => {
    // timer utiliser pour contrôle du rendu ou non de ce composant
    const [timer, setTimer] = useState(0);
    
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const counter2copy = counter2; // Simple copie is synchronized
    const counter1ref = useRef(counter1); // Usefull as initialValue. Better is to declare it first and pass it to useState
    const counter1memo = useMemo(() => counter1, [counter1]); // possible imputities @TODO check

    useEffect(() => {
        console.log("UseStatePage::render::first");

        // const intervalId = setInterval(() => {
        //   setTimer(timer => timer + 1);
        // }, 2000);

        const copy = counter1
        console.log('xCOPY:', copy);
        

        return () => {
            console.log("UseStatePage::cleanup");
            // clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        console.log("UseStatePage::render::counter-changes");
        const copy = counter1
        console.log('COPY:', copy);

    }, [counter1]);

    console.log("UseStatePage::render");


    return (
        <div className="general-provider-less-atoms-page">
            <p className="left c3">&lt;UseStatePage&gt;</p>
            <div className="ml-1 bl-dashed">
            <button onClick={() => setCounter1(counter1 + 1)}>UseStatePage::setCounter1(counter1 + 1)</button>
            <button onClick={() => setCounter2(counter2 + 1)} className='ml-5px'>UseStatePage::setCounter2(counter2 + 1)</button>
            <p>
                UseStatePage::counter1: {counter1}
                <br/>
                UseStatePage::counter2: {counter2}
                <br/>
                UseStatePage::counter3: {counter2copy}
                <br/>
                UseStatePage::counter4: {counter1ref.current}
                <br />
                UseStatePage::counter5: {counter1memo}
                <br/>
            </p>
            </div>
            <p className="left c3">&lt;UseStatePage/&gt;</p>
        </div>
    );
};

export default UseStatePage;
