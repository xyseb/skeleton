import { useEffect, useMemo, useRef, useState } from 'react';
import './GeneralProviderLessAtomsPage.scss';
import { atom, useAtom } from 'jotai';

const provLessAtom1 = atom<number>(0)
provLessAtom1.debugLabel = "GeneralProviderLessAtomsPage::atomToggle";
const provLessAtom2 = atom(0)
provLessAtom2.debugLabel = "GeneralProviderLessAtomsPage::atomToggle";
export {provLessAtom1, provLessAtom2};

const GeneralProviderLessAtomsPage:React.FC = () => {
    // timer utiliser pour contrôle du rendu ou non de ce composant
    const [timer, setTimer] = useState(0);
    const [counter1, setCounter1] = useAtom(provLessAtom1);
    const [counter2, setCounter2] = useAtom(provLessAtom2);
    const counter3 = counter2; // Simple copie is synchronized
    const counter4 = useRef(counter1); // Usefull as initialValue. Better is to declare it first and pass it to useState
    const counter5 = useMemo(() => counter1, [counter1]); // possible imputities @TODO check

    // useEffect(() => {
    //     console.log("GeneralProviderLessAtomsPage::render::first");

    //     // const intervalId = setInterval(() => {
    //     //   setTimer(timer => timer + 1);
    //     // }, 2000);

    //     // const copy = counter1
    //     // console.log('xCOPY:', copy);
        

    //     return () => {
    //         console.log("GeneralProviderLessAtomsPage::cleanup");
    //         // clearInterval(intervalId);
    //     };
    // }, []);

    // useEffect(() => {
    //     console.log("GeneralProviderLessAtomsPage::render::counter-changes");
    //     const copy = counter1
    //     console.log('COPY:', copy);

    // }, [counter1]);

    console.log("GeneralProviderLessAtomsPage::render");


    return (
        <div className="general-provider-less-atoms-page">
            <p className="left c3">&lt;GeneralProviderLessAtomsPage&gt;</p>
            <div className="ml-1 bl-dashed">
            <button onClick={() => setCounter1(counter1 + 1)}>GeneralProviderLessAtomsPage::setCounter1(counter1 + 1)</button>
            <button onClick={() => setCounter2(counter2 + 1)} className='ml-5px'>GeneralProviderLessAtomsPage::setCounter2(counter2 + 1)</button>
            <p>
                GeneralProviderLessAtomsPage::counter1: {counter1}
                <br/>
                GeneralProviderLessAtomsPage::counter2: {counter2}
                <br/>
                GeneralProviderLessAtomsPage::counter3: {counter3}
                <br/>
                GeneralProviderLessAtomsPage::counter4: {counter4.current}
                <br />
                GeneralProviderLessAtomsPage::counter5: {counter5}
                <br/>
            </p>
            </div>
            <p className="left c3">&lt;GeneralProviderLessAtomsPage/&gt;</p>
        </div>
    );
};

export default GeneralProviderLessAtomsPage;
