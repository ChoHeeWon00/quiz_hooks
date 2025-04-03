import { useNavigate, useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { useEffect, useState } from "react";
import { getOne } from "../../service/member/member";

function MOneCon() {
    const [params] = useSearchParams();
    console.log("params", params );
    const [data, setData] = useState({});
    useEffect(() => {
        const id = params.get("id");
        setData( getOne(id) );
    }, [params] )

    const navidate = useNavigate();
    const onDelete = ( id ) => {
        navidate("/member/delete/"+id);
    }
    const onModify = ( id ) => {
        navidate("/member/modify/"+id);
    }
    return (
     <div>
        <MOneCom onModify={onModify} data={data} onDelete={onDelete} />
     </div>
    );
  }  
  export default MOneCon;