import { useNavigate, useParams } from "react-router-dom";

function NotFound() {
    const nav = useNavigate();
    return (
      <>
          <h1>{ useParams()["*"] } NotFound </h1>
          <button onClick={ () => nav("/") }>HOEM 이동</button>
      </>
    );
  }  
  export default NotFound;