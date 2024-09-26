import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <>
      <h1>ページ１です</h1>
      <Link to="page1_detailA">DetailA</Link>
      <Link to="page1_detailB">DetailB</Link>
      <Outlet />
    </>
  );
};
