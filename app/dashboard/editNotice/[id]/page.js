import EditNoticeForm from "../../components/EditNoticeForm";
const getNoticeById=async(id)=>{
    try {
        const res=await fetch(`http://localhost:3000/api/notice/${id}`,{
            cache:'no-store'
        })
        if(!res.ok){
            throw new Error("failed to fetch the notice")
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default async function EditNotice({params}){
    const {id}=params;
    const {notice}= await getNoticeById(id);
    const {title,description}=notice;
    return (
        <div>
            <EditNoticeForm id={id} title={title} description={description}/>
        </div>
    )
}