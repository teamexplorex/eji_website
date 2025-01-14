import PackageHeader from "../components/package/detail/Header";
import PackageDetails from "../components/package/detail/PackageDetails";
import PackageDetailTabs from "../components/package/detail/PackageDetailTabs";

const PackageDetailPage = () => {
  return <div>
    <PackageHeader />
    <PackageDetailTabs />
    <PackageDetails />
  </div>;
};

export default PackageDetailPage;
