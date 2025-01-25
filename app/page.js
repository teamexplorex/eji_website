import Homepage from "./pages/Homepage";

async function fetchHomeData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/home`, {
    // next: { revalidate: 86400 },
  });

  if (!res.ok) {
    return null;
  }
  const data = await res.json();

  return {
    blogs: data.blogs,
    exploreTheWorldPackages: data.exploreTheWorldPackages,
    onceInAYearEventPackages: data.onceInAYearEventPackages,
    dreamVacationPackages: data.dreamVacationPackages,
    beautyOfIndiaPackages: data.beautyOfIndiaPackages,
  };
}

export default async function HomePage() {
  const homeData = await fetchHomeData();
  return (
    <Homepage
      blogs={homeData.blogs}
      exploreTheWorldPackages={homeData.exploreTheWorldPackages}
      onceInAYearEventPackages={homeData.onceInAYearEventPackages}
      dreamVacationPackages={homeData.dreamVacationPackages}
      beautyOfIndiaPackages={homeData.beautyOfIndiaPackages}
    />
  );
}
