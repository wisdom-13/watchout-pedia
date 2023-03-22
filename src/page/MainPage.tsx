import React from "react";
import Footer from "../components/Footer";
import Hearder from "../components/Hearder";
import LatestMovieSection from "../features/movie/latest";

const MainPage: React.FC = () => {
  return (
    <>
      <Hearder />
      <LatestMovieSection />
      <Footer />
    </>
  )
}

export default MainPage;