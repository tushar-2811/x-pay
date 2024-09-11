import {useEffect, useState} from 'react'

const useIsOnline = () => {
    const [isOnline , setIsOnline] = useState(window.navigator.onLine);

      useEffect(() => {
         const value = setInterval(() => {
               setIsOnline(window.navigator.onLine);
         },3000)

         return () => {
             clearInterval(value);            
        }
      },[])

      return {
        isOnline
      }
}

