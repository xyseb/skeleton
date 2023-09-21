import { atom, createStore, WritableAtom } from 'jotai';

type StoreAtoms = {
  centreNameAtom: WritableAtom<string, string[], void>;
}

type StoreValue = {
  centreName: string;
}

const initialState: StoreValue = {
  centreName: 'centreName initialized value',
};

//// const GeneralStore = createStore();

// export const centreNameAtom: WritableAtom<string, string[], void> = atom(
//   initialState.centreName,
//   (get, set, newValue: string) => {
//     const currentValue = get(centreNameAtom);
//     set(centreNameAtom, newValue);
//   }
// );

function initStore(initState:StoreValue): {GeneralStore:any, GeneralStoreAtoms:StoreAtoms} {
  const store = createStore();
  const centreNameAtom = atom<string>('centreName not initialized');
  centreNameAtom.debugLabel = "GeneralStore::centreNameAtom";
  store.set(centreNameAtom, initState.centreName); // Ajoutez cet atome d'état au magasin
  return {GeneralStore:store, GeneralStoreAtoms:{'centreNameAtom': centreNameAtom}};
}

////const centreNameAtom = atom<string>('centreNameAtomUndefined');
////centreNameAtom.debugLabel = "GeneralStore::centreNameAtom";
//GeneralStore.sub(centreNameAtom, () => { console.log('ola'); });
// GeneralStore.set(centreNameAtom, initialState.centreName); // Ajoutez cet atome d'état au magasin
const {GeneralStore, GeneralStoreAtoms} = initStore(initialState);
// const GeneralStore = initializedStore.store
// const centreNameAtom = initializedStore.atoms.centreNameAtom

export { GeneralStoreAtoms };
export default GeneralStore;
// import { atom, Atom, createStore, SetStateAction, WritableAtom } from 'jotai';

// type GeneralStoreValues = {
//   centreName: Atom<string>;
// }

// const initialState: GeneralStoreValues = {
//   centreName: atom('valeur initiale'),
// };

// const generalStore = createStore();

// const loadingAtom = atom(false);
// jotaiStore.set(initialState.centreName, !loadingAtom)
// const unsub = jotaiStore.sub(loadingAtom, () => {
//   console.log('countAtom value is changed to', jotaiStore.get(loadingAtom))
// });

// const initialCentreNameAtom = atom<string>('');
// initialCentreNameAtom.debugLabel = 'GeneralStore::centreNameAtom';
// // export initialCentreNameAtom;
// jotaiStore.set(initialCentreNameAtom, 'undefined')
// const unsub2 = jotaiStore.sub(initialCentreNameAtom, () => {
//   console.log('countAtom value is changed to', jotaiStore.get(initialCentreNameAtom))
// });

// const centreParamsAtom = atom(undefined)
// jotaiStore.set(centreParamsAtom, undefined)
// const unsub3 = jotaiStore.sub(loadingAtom, () => {
//   console.log('countAtom value is changed to', jotaiStore.get(centreParamsAtom))
// });

// // unsub() to unsubscribe

// // const Root = () => (
// //   <Provider store={myStore}>
// //     <App />
// //   </Provider>
// // )


// // Atoms
// export const centreNameAtom = initialCentreNameAtom;//atom<string|undefined>(initialCentreNameAtom.read);
// export const newCentreParamAtom = atom<Array<Object>|undefined>(undefined);
// export const newLoadingAtom = atom<boolean>(false);

// export default jotaiStore;