import { Atom, SetStateAction, WritableAtom, atom } from 'jotai';
import { RESET, atomWithReset } from 'jotai/utils';

interface IImage {
    id: string;
//    author: string;
    width: number;
    height: number;
    url: string;
    //download_url: string;
}

type Nullable<T> = T | null 

// Créez une fonction qui vérifie si un objet respecte l'interface IImage
function isImageObject(obj: any): obj is IImage {
    return (
        typeof obj === 'object' &&
        'width' in obj &&
        'height' in obj &&
        'url' in obj &&
        typeof obj.width === 'number' &&
        typeof obj.height === 'number' &&
        typeof obj.url === 'string'
    );
}

const resetfetchAtom: WritableAtom<Promise<Nullable<IImage>>, [SetStateAction<Nullable<IImage>>], void> = atomWithReset<Promise<Nullable<IImage>>>(
  initialValue: null,
  async (get) => {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');
    if (!resp.ok) {
      throw new Error('Failed to fetch image');
      //return null;
    }
    const img = await resp.json();
    // if (img instanceof IImage) {

    // } else {

    // }
    return (isImageObject(img[0])) ? img[0] as IImage : null;
  },
  (_get, set, val) => set(fetchAtom, val)
);
resetfetchAtom.debugLabel = "CentreStore::fetchCentreAtom";

const fetchAtom: WritableAtom<Promise<Nullable<IImage>>, [Nullable<IImage>], void> = atom<Promise<Nullable<IImage>>, [Nullable<IImage>], void>(
  async (get) => {
    const resp = await fetch('https://api.thecatapi.com/v1/images/search');
    if (!resp.ok) {
      throw new Error('Failed to fetch image');
      //return null;
    }
    const img = await resp.json();
    // if (img instanceof IImage) {

    // } else {

    // }
    return (isImageObject(img[0])) ? img[0] as IImage : null;
  },
  (_get, set, val) => set(fetchAtom, val)
);
fetchAtom.debugLabel = "CentreStore::fetchCentreAtom";


// const fetchAtom: Atom<Promise<Nullable<IImage>>> = atom<Promise<Nullable<IImage>>>(
//   async (get) => {
//     await new Promise(resolve => setTimeout(resolve, 10000));
//     const resp = await fetch('https://api.thecatapi.com/v1/images/search');
//     if (!resp.ok) {
//       throw new Error('Failed to fetch image');
//       //return null;
//     }

//     const img = await resp.json();
//     // if (img instanceof IImage) {

//     // } else {

//     // }
//     return (isImageObject(img[0])) ? img[0] as IImage : null;
//   },
//   //(_get, set, val) => set(fetchAtom, val)
// );
export type { Nullable, IImage }
export { fetchAtom, resetfetchAtom };
