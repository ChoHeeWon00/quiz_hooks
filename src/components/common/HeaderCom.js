import { Link, Outlet } from "react-router-dom";

function HeaderCom() {
  return (<>
    <header>
       <Link to="/">Home</Link>
       <Link to="/member/list">List</Link>
    </header>
    <hr />
    <main> 
        <Outlet />
    </main>
    </>
  );
}  
export default HeaderCom;