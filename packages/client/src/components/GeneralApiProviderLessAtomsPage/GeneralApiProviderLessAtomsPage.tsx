import { Suspense, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import './GeneralApiProviderLessAtomsPage.scss';
import { Atom, atom, useAtom, useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { fetchAtom, IImage, Nullable, resetfetchAtom } from '../../stores/ApiAtoms'
import CircleSpinner from '../CircleSpinner/CircleSpinner';


const GeneralApiProviderLessAtomsPage:React.FC = () => {
    // timer utiliser pour contrôle du rendu ou non de ce composant
    const [timer, setTimer] = useState(0);

//    const fetchAtomValue = useAtomValue(fetchAtom);
//    const [fetchAtomValue, setFetchAtomValue] = useAtom(fetchAtom);
    const [fetchAtomValue, setFetchAtomValue] = useAtom(resetfetchAtom);
//    const fetchAtomValue = useAtomValue(resetfetchAtom);
const resetAtom: () => void = useResetAtom(resetfetchAtom);
//    const deferedFetchAtomValue = useDeferredValue(fetchAtomValue);



// const fetchAtomValue = useAtomValue(fetchAtom);
    //const [fetchAtomValue, setFetchAtomValue] = useAtom<Promise<Nullable<IImage>>, [Nullable<IImage>], void>(fetchAtom.fetchAtom);

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
            resetAtom();
        };
    }, [resetAtom]);

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
            <Suspense fallback={<CircleSpinner/>}>
                {fetchAtomValue &&
                <img src={fetchAtomValue.url} alt="img" width="80" height="80" />}
                {/*deferedFetchAtomValue &&
                <img src={deferedFetchAtomValue.url} alt="img" width="80" height="80" />*/}
            </Suspense>
            </div>
            <p className="left c3">&lt;GeneralApiProviderLessAtomsPage/&gt;</p>
        </div>
    );
};

export default GeneralApiProviderLessAtomsPage;
