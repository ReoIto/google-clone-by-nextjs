import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";

export default function Home() {
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

        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200">
          <SearchIcon className="h-5 text-gray-500" />
          <input type="text" />
          <MicrophoneIcon className="h-5" />
        </div>

        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </form>

      {/* Footer */}
    </div>
  );
}
