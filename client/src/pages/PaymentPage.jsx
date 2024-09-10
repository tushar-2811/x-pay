import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentPage = () => {
   const [searchParams]= useSearchParams();
   const userId = searchParams.get("id");
   const name = searchParams.get("name");
  return (
    <div>
    
    </div>
  )
}

export default PaymentPage
