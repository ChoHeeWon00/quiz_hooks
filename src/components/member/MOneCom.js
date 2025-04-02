function MOneCom( {data, onDelete} ) {
    return (
     <div>
        <ul>
        <li>id : {data.id}</li>
        <li>pwd : {data.pwd}</li>
        <li>name : {data.name}</li>
        <li>addr : {data.addr}</li>
        <li>
            <button onClick={ ()=>onDelete(data.id) }>삭제</button>
        </li>
        </ul>
     </div>
    );
  }  
  export default MOneCom;