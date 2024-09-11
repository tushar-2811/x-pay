import {useEffect, useState} from 'react'


export const useDebounce = (inputValue , timeout) => {
     const [debouncedData , setDebouncedData] = useState(inputValue);

     useEffect(() => {
        let timerId = setTimeout(() => {
           setDebouncedData(value);
        },timeout)

        return () => {
            clearTimeout(timerId);
        }
     },[value])

     return debouncedData;
}