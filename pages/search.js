import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";

export default function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search Results */}
      <SearchResults results={results} />
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
