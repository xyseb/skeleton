import { Atom, atom } from 'jotai';
//import { FetchApiAsync } from '../Models/BaseModels';
//import { ICentre } from '../Models/Centre';

interface IImage {
    id: number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
}
type Nullable<T> = T | null 

const fetchAtom = atom<Nullable<IImage>>(async () => await fetch('https://picsum.photos/200').then(async resp => {
    const img = await resp.json()
    if (img instanceof IImage) return img;
    else return null
}));
fetchAtom.debugLabel = "CentreStore::fetchCentreAtom";

// const centreAtom = atom<Nullable<ICentre>>(async () => (getCentre().then(c => (c))));
// centreAtom.debugLabel = "CentreStore::centreAtom";

// const getCentre = async (): Promise<Nullable<ICentre>> =>
// {
//     try
//     {
//         const response = await FetchApiAsync(
//             {
//                 url: 'centres/centre',
//                 init: {
//                     method: "GET"
//                 }
//             }
//         );

//         if (response.ok)
//         {
//             const data: ICentre = await response.json() as ICentre;
//             return data;
//         }
//         else
//         {
//             console.error(`FetchApiAsync::GET sur centres/centre retourne l'erreur "{response.message}"`);
//             return null;
//         }
//     } catch (error)
//     {
//         console.error(`FetchApiAsync::GET sur centres/centre retourne une valeur inatendue`, error);
//         return null;
//     }
// };


// export { getCentre };
//export default { centreAtom };
export type { Nullable, IImage }
export default { fetchAtom };

