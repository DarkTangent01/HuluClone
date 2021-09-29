import Head from "next/head";
import requests from "../utils/requests";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

export default function Home({ results }) {
  return (
    <div className="">
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Nav */}
      <Navbar />

      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTreanding.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
