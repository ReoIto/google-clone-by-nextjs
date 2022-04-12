import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;

  return (
    <dev className="text-blue-700 flex px-9 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
          passHref
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronDoubleLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
          passHref
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronDoubleRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </dev>
  );
}
