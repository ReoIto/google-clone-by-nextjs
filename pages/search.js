import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import ImageResults from "../components/ImageResults";
import { Constants } from "../constants";

export default function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search web and images Results */}
      {router.query.searchType == "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || 1;

  // GoogleApiのリクエストは100回/1日の制限があるため、
  // 'hello'で検索した際のレスポンスをコピーしてリクエストせずとも
  // モックデータが返ってくるようにする
  const mockData = false;
  const data = mockData
    ? Response
    : await fetch(
        `${Constants.GoogleApiCustomSearchPath}?key=${process.env.API_KEY}&cx=${
          process.env.CONTEXT_KEY
        }&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
}
