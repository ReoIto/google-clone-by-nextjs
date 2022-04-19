import Link from "next/link";
import { useRouter } from "next/router";
import User from "./User";
import { Constants } from "../constants";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href={Constants.AboutPath}>
          <a className="link">About</a>
        </Link>
        <Link href={Constants.StorePath}>
          <a className="link">Store</a>
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href={Constants.GmailPath}>
          <a className="link">Gmail</a>
        </Link>
        <a
          onClick={() =>
            router.push(
              `search?term=${router.query.term || "google"}&searchType=image`
            )
          }
          className="link"
        >
          Images
        </a>
        <User />
      </div>
    </header>
  );
}
