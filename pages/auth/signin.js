import Header from "../../components/Header";
import { getProviders, signIn } from "next-auth/react";
import { Constants } from "../../constants";
import Image from "next/image";

// next-auth/reactのsignInと名前衝突してしまうため、
// component名をsigninにする
export default function signin({ providers }) {
  return (
    <div>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <Image
              className="object-cover"
              src={Constants.GoogleLogoImagePath}
              alt="google-logo"
              width="300px"
              height="100px"
            />
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes.
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
