import {useState, useEffect} from 'react';

export default function useSharedCounter() {
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