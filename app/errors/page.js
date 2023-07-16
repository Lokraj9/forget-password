'use client'
import { useRouter,useSearchParams } from "next/navigation"

const Erros = () => {
    const router=useRouter();
    const searchParams=useSearchParams();
    const errMsg=searchParams.get('error')
  return (
    <div>
        <h1 style={{color:'red'}}>Erros:{errMsg}</h1>
        <button  onClick={()=>router.back()}>Try again</button>
    </div>
  )
}

export default Erros