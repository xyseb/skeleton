import { Atom, atom, createStore, WritableAtom } from 'jotai';

type StoreAtoms = {
    anotherNameAtom: WritableAtom<string, string[], void>;
}

type StoreValue = {
  anotherName: string;
}

const initialState: StoreValue = {
    anotherName: 'anotherName initialized value',
};

function initStore(initState:StoreValue): {SubComponentStore:any, SubComponentStoreAtoms:StoreAtoms} {
  const store = createStore();
  const anotherNameAtom = atom<string>('anotherName not initialized');
  anotherNameAtom.debugLabel = "SubComponentStore::anotherNameAtom";
  store.set(anotherNameAtom, initState.anotherName); // Ajoutez cet atome d'état au magasin
  return {SubComponentStore:store, SubComponentStoreAtoms:{'anotherNameAtom': anotherNameAtom}};
}

const {SubComponentStore, SubComponentStoreAtoms} = initStore(initialState);

export { SubComponentStoreAtoms };
export default SubComponentStore;

////import { atom, createStore, WritableAtom } from 'jotai';

// type StoreValue = {
//   centreName: string;
// }

// const initialState: StoreValue = {
//   centreName: 'valeur initiale',
// };

////const SubComponentStore = createStore();

// export const centreNameAtom: WritableAtom<string, string[], void> = atom(
//   initialState.centreName,
//   (get, set, newValue: string) => {
//     const currentValue = get(centreNameAtom);
//     set(centreNameAtom, newValue);
//   }
// );

////const anotherAtom = atom<string>('another');
////anotherAtom.debugLabel = "SubComponentStore::anotherAtom";
//GeneralStore.sub(centreNameAtom, () => { console.log('ola'); });
// GeneralStore.set(centreNameAtom, initialState.centreName); // Ajoutez cet atome d'état au magasin
////export { anotherAtom };
////export default SubComponentStore;
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