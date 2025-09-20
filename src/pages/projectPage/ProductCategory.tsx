import { useState } from "react";

export default function ProductCategory() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "bathroom",
    "bedroom",
    "countertops",
    "kitchen",
    "living room",
  ];

  return (
    <div className="flex gap-2 flex-wrap pb-8 pt-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-full border transition  text-sm
            ${
              active === cat
                ? "bg-gray-100 text-black border-gray-300"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
