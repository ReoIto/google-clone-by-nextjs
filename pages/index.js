import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroIcons/react/solid";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term.trim()) {
      return;
    }

    router.push(`/search?term=${term.trim()}&searchType=`);
  }

  async function onClickSearchRandomWord(e) {
    e.preventDefault();

    const randomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((res) => res.json());
    if (!randomTerm) {
      return;
    }

    router.push(`/search?term=${randomTerm}&searchType=`);
  }

  return (
    <div>
      <Head>
        <title>Google clone by NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          width="300"
          height="100"
          objectFit="cover"
          src="https://cdn.pixabay.com/photo/2015/11/02/14/01/google-1018443_960_720.png"
          alt="google logo"
        />

        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-width-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={onClickSearchRandomWord} className="btn">
            Whatever ..
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
