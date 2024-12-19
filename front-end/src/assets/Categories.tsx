import React, { useState } from "react";

function Categories() {
  const [activeFlavors, setActiveFlavors] = useState<string[]>([]);

  const handleButtonClick = (flavor: string) => {
    if (activeFlavors.includes(flavor)) {
      // Remove flavor if it's already active
      setActiveFlavors((prev) => prev.filter((f) => f !== flavor));
    } else if (activeFlavors.length < 2) {
      // Add flavor if less than two are active
      setActiveFlavors((prev) => [...prev, flavor]);
    } else {
      // Replace the first active flavor if two are already active
      setActiveFlavors((prev) => [prev[1], flavor]);
    }
  };

  return (
    <div>
      <div className="bg-gray-700 flex flex-col items-center h-40 w-full">
        <header className="text-3xl font-bold text-white font-serif mt-1">
          Flavors
        </header>
        <div className="grid grid-cols-4 gap-6 pt-4 mt-[-1rem]">
          {[
            { name: "Apple", color: "red" },
            { name: "Lemonade", color: "yellow" },
            { name: "Blueberry", color: "blue" },
            { name: "Orange", color: "orange" },
            { name: "Watermelon", color: "pink" },
            { name: "Grape", color: "purple" },
            { name: "Strawberry", color: "rose" },
            { name: "Kiwi", color: "green" },
          ].map(({ name, color }) => (
            <button
              key={name}
              onClick={() => handleButtonClick(name)}
              className={`bg-${color}-500 hover:bg-${color}-400 text-white font-bold h-8 px-4 border-b-4 border-${color}-700 hover:border-${color}-500 rounded ${
                activeFlavors.includes(name)
                  ? `ring-2 ring-offset-2 ring-${color}-300 ring-offset-gray-700`
                  : ""
              }
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
