"use client";
import { DateSet, Set } from "@/_types";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface SetsContextType {
  sets: DateSet[];
  slug: string;
  setSlug: (slug: string) => void;
  addSet: (set: Set) => void;
}

export const SetsContext = createContext<SetsContextType | undefined>(
  undefined
);

export const useSetsContext = (): SetsContextType => {
  const context = useContext(SetsContext);

  if (!context) {
    throw new Error("useSetsContext must be used within a SetsContextProvider");
  }

  return context;
};

export const SetsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sets, setSets] = useState<DateSet[]>([]);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    const storedSets = localStorage.getItem(slug);
    if (storedSets) {
      setSets(JSON.parse(storedSets));
    } else {
      setSets([]);
    }
  }, [slug]);

  useEffect(() => {
    localStorage.setItem(slug, JSON.stringify(sets));
  }, [sets]);

  const addSet = (set: Set) => {
    let existingDateSet = sets.findIndex(
      (dateSet) => new Date(dateSet.date).getDate() === set.date.getDate()
    );
    if (existingDateSet !== -1) {
      let newSets = [...sets];
      newSets[existingDateSet].sets.push(set);
      setSets(newSets);
    } else {
      setSets([...sets, { date: set.date, sets: [set] }]);
    }
  };

  const contextValue: SetsContextType = {
    sets,
    slug,
    setSlug,
    addSet,
  };

  return (
    <SetsContext.Provider value={contextValue}>{children}</SetsContext.Provider>
  );
};
