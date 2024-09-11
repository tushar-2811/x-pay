import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMousePointer } from '../hooks/useMousePointer';
import { useDimensions } from '../hooks/useDimensions';

const PaymentPage = () => {
  //  const [searchParams]= useSearchParams();
  //  const userId = searchParams.get("id");
  //  const name = searchParams.get("name");

   const mousePointer = useMousePointer();
   const windowDimension = useDimensions();

  return (
    <div>
      your mouse postion is : {mousePointer.x} and {mousePointer.y}
      your window dimensions are : {windowDimension.height} and {windowDimension.width}
    </div>
  )
}

export default PaymentPage
