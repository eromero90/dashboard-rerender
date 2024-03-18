import { createContext, useContext, useState } from "react";

const FilterContext = createContext<{
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error(
      "Filter inner components cannot be used outside the Filter Context Provider Component"
    );
  }
  return context;
}

function FilterContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  console.count("FilterContextProvider render");

  const [filter, setFilter] = useState("");
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export { FilterContextProvider, useFilterContext }