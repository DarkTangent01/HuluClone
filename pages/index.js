import Head from "next/head";
import requests from "../utils/requests";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import Footer from "../components/Footer";

export default function Home({ results }) {
  return (
    <div className="">
      <Head>
        <title>Stream TV and Movies Live and Online | hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Nav */}
      <Navbar />

      {/* Results */}
      <Results results={results} />

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
