import Tabs from "../components/Package-history/Tabs";
import Header from "../components/package/Header";
import Packages from "../components/package/Packages";
import Packages2 from "../components/package/Packages2";

const PackagePage = ({ packageType }) => {
  return (
    <div>
      <Header />
      {packageType === 2 ? (
        <Packages2 />
      ) : (
        <>
          <Packages />
        </>
      )}
    </div>
  );
};

export default PackagePage;
