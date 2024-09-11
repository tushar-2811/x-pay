import { useEffect, useState } from "react"

const useFetchUsers = (time) => {
     const [data , setData] = useState([]);
     const [isLoading , setIsLoading] = useState(true);

     useEffect(() => {
      const value = setInterval(() => {
             // fetch data here
             setIsLoading(false);
        },time*1000)

        return () => {
            clearInterval(value);
         }
     },[time])

     return {data , isLoading}
}