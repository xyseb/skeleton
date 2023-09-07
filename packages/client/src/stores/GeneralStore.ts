import { atom, createStore } from "jotai";

const jotaiStore = createStore()

const loadingAtom = atom(false);
jotaiStore.set(loadingAtom, !loadingAtom)
const unsub = jotaiStore.sub(loadingAtom, () => {
  console.log('countAtom value is changed to', jotaiStore.get(loadingAtom))
});

const initialCentreNameAtom = atom('');
initialCentreNameAtom.debugLabel = 'GeneralStore::centreNameAtom';

jotaiStore.set(initialCentreNameAtom, 'undefined')
const unsub2 = jotaiStore.sub(initialCentreNameAtom, () => {
  console.log('countAtom value is changed to', jotaiStore.get(initialCentreNameAtom))
});

const centreParamsAtom = atom(undefined)
jotaiStore.set(centreParamsAtom, undefined)
const unsub3 = jotaiStore.sub(loadingAtom, () => {
  console.log('countAtom value is changed to', jotaiStore.get(centreParamsAtom))
});

// unsub() to unsubscribe

// const Root = () => (
//   <Provider store={myStore}>
//     <App />
//   </Provider>
// )


// Atoms
export const centreNameAtom = atom<string|undefined>(initialCentreNameAtom);
export const newCentreParamAtom = atom<Array<Object>|undefined>(undefined);
export const newLoadingAtom = atom<boolean>(false);

export default jotaiStore;