import { verifyWithCredentials } from '@/action/authActions';


const VerifyPage = async({searchParams:{token}}) => {
    const res=await verifyWithCredentials(token);

  return (
    <h1 style={{color:'green!'}}>{res?.msg}</h1>
  )
}

export default VerifyPage