import {useState, useEffect} from 'react';

interface ISharedCounterCustomHook {
    hookCount: number;
    setSharedCount: (val:number) => void;
    getSharedCount: () => number;
}

export default function useSharedCounter():ISharedCounterCustomHook {
    const [hookCount, setHookCount] = useState(0);

    // useEffect(() => {
    //     return () => {
            
    //     }
    // }, []);

    const setSharedCount = (val:number) => {
        setHookCount(val);
    };

    const getSharedCount = () => {
        return hookCount;
    };

    return {hookCount, setSharedCount, getSharedCount};
};