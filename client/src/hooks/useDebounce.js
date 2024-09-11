import {useEffect, useState} from 'react'


export const useDebounce = (inputValue , timeout) => {
     const [debouncedData , setDebouncedData] = useState(inputValue);

     useEffect(() => {
        let timerId = setTimeout(() => {
           // do stuff backend calls
           setDebouncedData("");
        },timeout)

        return () => {
            clearTimeout(timerId);
        }
     },[value])

     return debouncedData;
}