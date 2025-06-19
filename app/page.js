import NextSeo from "@/components/Seo/Seo";
import MainHomePage from "../components/MainPage";

export default function Home() {
  const seoField = {
    title: "Performance Marketing Services",
    description:
      "Discover top-notch performance marketing services with iVistaz. Our expert team offers innovative solutions to boost your business's online presence and drive measurable results. Partner with us for customized strategies that enhance your digital growth.",
    path: "/",
  };

  return (
    <>
      <NextSeo {...seoField} />
      <MainHomePage />
    </>
  );
}
