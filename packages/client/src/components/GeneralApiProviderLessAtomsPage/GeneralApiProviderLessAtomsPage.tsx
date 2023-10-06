import { useEffect, useMemo, useRef, useState } from 'react';
import './GeneralApiProviderLessAtomsPage.scss';
import { Atom, atom, useAtom, useAtomValue } from 'jotai';
import fetchAtom, { IImage, Nullable } from '../../stores/ApiAtoms'

const GeneralApiProviderLessAtomsPage:React.FC = () => {
    // timer utiliser pour contrôle du rendu ou non de ce composant
    const [timer, setTimer] = useState(0);

    // const fetchAtomValue = useAtomValue(fetchAtom);
    const [fetchAtomValue, setFetchAtomValue] = useAtom<Promise<Nullable<IImage>>>(fetchAtom);
    useEffect(() => {
        console.log("GeneralProviderLessAtomsPage::render::first");

        // const intervalId = setInterval(() => {
        //   setTimer(timer => timer + 1);
        // }, 2000);

        // const copy = counter1
        // console.log('xCOPY:', copy);
        

        return () => {
            console.log("GeneralProviderLessAtomsPage::cleanup");
            // clearInterval(intervalId);
            setFetchAtomValue(null);
        };
    }, []);

    // useEffect(() => {
    //     console.log("GeneralProviderLessAtomsPage::render::counter-changes");
    //     const copy = counter1
    //     console.log('COPY:', copy);

    // }, [counter1]);

    console.log("GeneralApiProviderLessAtomsPage::render");


    return (
        <div className="general-api-provider-less-atoms-page">
            <p className="left c3">&lt;GeneralApiProviderLessAtomsPage&gt;</p>
            <div className="ml-1 bl-dashed">
                <img src={fetchAtomValue.url} alt="img" width={fetchAtomValue.width} height={fetchAtomValue.height} />
            </div>
            <p className="left c3">&lt;GeneralApiProviderLessAtomsPage/&gt;</p>
        </div>
    );
};

export default GeneralApiProviderLessAtomsPage;
