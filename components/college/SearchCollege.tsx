// import { searchCollgByKeys } from "@/datalayer/strapi/college";
// import useDebounce from "@/hooks/useDebounce";
// import { useState } from "react";
// import { Input } from "../ui/input";

// const SearchCollege = ({ setFilteredCollege }: { setFilteredCollege: any }) => {
//   const [searchValue, setSearchValue] = useState("");
//   const debouncedSearch = useDebounce(searchValue, 500);
//   const searchResults = searchCollgByKeys(debouncedSearch);

//   return (
//     <div className="mb-5">
//       <Input
//         type="text"
//         placeholder="Search"
//         className="explore-search"
//         value={searchValue}
//         onChange={(e) => {
//           const { value } = e.target;
//           setSearchValue(value);
//         }}
//       />
//     </div>
//   );
// };

// export default SearchCollege;
