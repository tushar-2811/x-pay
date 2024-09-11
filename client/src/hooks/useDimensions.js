import { useEffect, useState } from "react"

export const useDimensions = () => {
    const [position , setPosition] = useState({
        height : window.innerHeight , width : window.innerWidth
    })

    const handleDimensionChange = (e) => {
        setPosition({
            height : window.innerHeight,
            width : window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize' , handleDimensionChange);

        return () => {
            window.removeEventListener('resize' , handleDimensionChange)
        }
    },[])

    return position;
}