'use client'

import ProtectedComponent from "@/components/Protected"

const ProtectedClientPage = () => {

  return (
    <div>
        <h1>this is a 
            <i style={{color:'red'}}>client -side</i>Protected page
        </h1>
       <ProtectedComponent/>
    </div>
  )
}

export default ProtectedClientPage