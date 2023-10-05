import { atom } from 'jotai';
import { FetchApiAsync } from '../Models/BaseModels';
import { ICentre } from '../Models/Centre';


/**
 * Definition du store du centre
 */
const centreAtom = atom<Nullable<ICentre>>(async () => (getCentre().then(c => (c))));
centreAtom.debugLabel = "CentreStore::centreAtom";

const getCentre = async (): Promise<Nullable<ICentre>> =>
{
    try
    {
        const response = await FetchApiAsync(
            {
                url: 'centres/centre',
                init: {
                    method: "GET"
                }
            }
        );

        if (response.ok)
        {
            const data: ICentre = await response.json() as ICentre;
            return data;
        }
        else
        {
            console.error(`FetchApiAsync::GET sur centres/centre retourne l'erreur "{response.message}"`);
            return null;
        }
    } catch (error)
    {
        console.error(`FetchApiAsync::GET sur centres/centre retourne une valeur inatendue`, error);
        return null;
    }
};

export { getCentre };
export default { centreAtom };


--------------------------


import { Suspense, useEffect } from 'react';
import { useAtomValue, useAtom, Provider } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import centreAtom, { getCentre } from '../../../Atoms/CentreAtom';
import { ICentre } from '../../../Models/Centre';
import CircleSpinner from '../../_Common/CircleSpinner/CircleSpinner';
import { DevTools } from 'jotai-devtools';

//import './CentreName.scss';

const CentreName: React.FC = () =>
{
    const centreAtomValue = useAtomValue(centreAtom);
    //const resetCentre: () => void = useResetAtom(centreAtom);

    //useEffect(() =>
    //{
    //    (async () => getCentre().then(c => setCentreAtomValue(c)))();

    //    return resetCentre();
    //}, []);

    return (
        <h3 className="accueil-heading accueil-nom-centre">
            <Suspense fallback={<CircleSpinner />}>
                {centreAtomValue?.Nom}
            </Suspense>
        </h3>
    );
};

export default CentreName;




----------------------




import { createStore, SetStateAction, WritableAtom } from 'jotai';
import { atomWithReset, RESET } from 'jotai/utils';
import { FetchApiAsync, FetchError } from '../Models/BaseModels';
import { ICentre } from '../Models/Centre';


/**
 * Definition du store du centre
 */
type CentreStoreAtomsType = {
    centreAtom: WritableAtom<Nullable<ICentre>, [SetStateAction<Nullable<ICentre>> | typeof RESET], void>;
}

type CentreStoreValue = {
    centre: Nullable<ICentre>;
}

const initialState: CentreStoreValue = {
    centre: null,
};

function initStore(initState: CentreStoreValue): { CentreStore: any, CentreStoreAtoms: CentreStoreAtomsType }
{
    const store = createStore();
    const centreAtom = atomWithReset<Nullable<ICentre>>(null);
    centreAtom.debugLabel = "CentreStore::centreAtom";
    store.set(centreAtom, initState.centre); // Ajoutez cet atome d'état au magasin
    return { CentreStore: store, CentreStoreAtoms: { 'centreAtom': centreAtom } };
}
const { CentreStore, CentreStoreAtoms } = initStore(initialState);

const getCentre = async (): Promise<Nullable<ICentre>> =>
{
    try
    {
        const response = await FetchApiAsync(
            {
                url: 'centres/centre',
                init: {
                    method: "GET"
                }
            }
        );

        if (response.ok)
        {
            const data: ICentre = await response.json();
            return data;
        }
        else
        {
            console.error(`FetchApiAsync::GET sur centres/centre retourne l'erreur "{response.message}"`);
            return null;
        }
    } catch (error)
    {
        console.error(`FetchApiAsync::GET sur centres/centre retourne une valeur inatendue`, error);
        return null;
    }
};

export { getCentre, CentreStore, CentreStoreAtoms };
export default CentreStore;


