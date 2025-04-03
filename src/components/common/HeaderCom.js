import { Link, Outlet } from "react-router-dom";


//MRegPage.js, MRegCon.js, MRegCom.js
function HeaderCom() {
  return (<>
    <header>
       <Link to="/">Home</Link>
       <Link to="/member/list">List</Link>
       <Link to="/member/register">회원가입</Link>
    </header>
    <hr />
    <main> 
        <Outlet />
    </main>
    </>
  );
}  
export default HeaderCom;