import PackageDetail from "../../pages/PackageDetail";

async function fetchPackageId(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/package/${id}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.message;
}

export default async function PackageDetailPage({ params }) {
  const { id } = await params;
  const packageData = await fetchPackageId(id);
  return <PackageDetail packageData={packageData} />;
}
