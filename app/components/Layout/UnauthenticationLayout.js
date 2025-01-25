import { getCookie } from "cookies-next";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  const cookies = getCookie("accessToken");

  return (
    <>
      {!cookies ? props.children : <></>}
      <Toaster position='bottom-right' />
    </>
  );
};

export default Layout;
