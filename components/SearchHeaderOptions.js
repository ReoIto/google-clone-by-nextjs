import { useRouter } from "next/router";
import SearchHeaderOption from "./SearchHeaderOption";
import { SearchIcon, PhotographIcon } from "@heroIcons/react/solid";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        isSelected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        isSelected={router.query.searchType === "image"}
      />
    </div>
  );
}
