type CategoriesProps = {
  activeFlavors: string[];
  onFlavorsChange: (flavors: string[]) => void;
};

const Categories: React.FC<CategoriesProps> = ({
  activeFlavors,
  onFlavorsChange,
}) => {
  const handleButtonClick = (flavor: string) => {
    if (activeFlavors.includes(flavor)) {
      onFlavorsChange(activeFlavors.filter((f) => f !== flavor));
    } else if (activeFlavors.length < 2) {
      onFlavorsChange([...activeFlavors, flavor]);
    } else {
      onFlavorsChange([activeFlavors[1], flavor]);
    }
  };

  const flavorStyles = {
    Apple:
      "bg-red-500 hover:bg-red-400 border-red-700 hover:border-red-500 ring-red-300",
    Lemonade:
      "bg-yellow-500 hover:bg-yellow-400 border-yellow-700 hover:border-yellow-500 ring-yellow-300",
    Blueberry:
      "bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500 ring-blue-300",
    Orange:
      "bg-orange-500 hover:bg-orange-400 border-orange-700 hover:border-orange-500 ring-orange-300",
    Watermelon:
      "bg-pink-500 hover:bg-pink-400 border-pink-700 hover:border-pink-500 ring-pink-300",
    Grape:
      "bg-purple-500 hover:bg-purple-400 border-purple-700 hover:border-purple-500 ring-purple-300",
    Strawberry:
      "bg-rose-500 hover:bg-rose-400 border-rose-700 hover:border-rose-500 ring-rose-300",
    Kiwi: "bg-green-500 hover:bg-green-400 border-green-700 hover:border-green-500 ring-green-300",
  };

  return (
    <div>
      <div className="bg-gray-700 flex flex-col items-center h-40 w-full">
        <header className="text-3xl font-bold text-white font-serif mt-1">
          Flavors!
        </header>
        <div className="grid grid-cols-4 gap-6 pt-4 mt-[-1rem]">
          {Object.entries(flavorStyles).map(([name, styles]) => (
            <button
              key={name}
              onClick={() => handleButtonClick(name)}
              className={`text-white font-bold h-8 px-4 rounded border-b-4 ${styles} ${
                activeFlavors.includes(name)
                  ? "ring-2 ring-offset-2 ring-offset-gray-700"
                  : ""
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
