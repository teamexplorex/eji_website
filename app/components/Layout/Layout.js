"use client";
import { store } from "../../store";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import Navbar from "../Layout/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Layout/Footer";
import classes from "./Layout.module.css";
import LayoutConfig from './LayoutConfig'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className={classes.navbarWrapper}>
          <Navbar />
        </div>
        <div className={classes.contentWrapper}>
          <LayoutConfig>{children}</LayoutConfig>
          <Footer />
        </div>
      </QueryClientProvider>
      <Toaster position="bottom-right" />
    </Provider>
  );
};

export default Layout;
