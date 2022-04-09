import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";

export default function search({ results }) {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
    </div>
  );
}

export async function getServerSideProps(context) {
  // GoogleApiのリクエストは100回/1日の制限があるため、
  // 'hello'で検索した際のレスポンスをコピーしてリクエストせずとも
  // モックデータが返ってくるようにする
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&seachType=image"
        }`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
