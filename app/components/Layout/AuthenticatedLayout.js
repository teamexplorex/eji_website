import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fetchUsers } from "../../store/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';

const Layout = (props) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(fetchUsers());
      return;
    };

    if(!isAuthenticated){
      router.push("/signin");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isAuthenticated]);

  return (
    <>
      {user ? props.children : <></>}
      <Toaster position="bottom-right" />
    </>
  );
};

export default Layout;
