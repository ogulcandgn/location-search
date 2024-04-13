import type { Place } from "../api/Place";
import { useState } from "react";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [term, setTerm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("search api", term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-md focus:border-indigo-500 px-4 py-2 w-full"
          value={term}
          id="term"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
