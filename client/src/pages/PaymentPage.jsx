import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useMousePointer } from '../hooks/useMousePointer';

const PaymentPage = () => {
  //  const [searchParams]= useSearchParams();
  //  const userId = searchParams.get("id");
  //  const name = searchParams.get("name");

   const mousePointer = useMousePointer();

  return (
    <div>
      your mouse postion is : {mousePointer.x} and {mousePointer.y}
    </div>
  )
}

export default PaymentPage
