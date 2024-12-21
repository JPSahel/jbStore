import React, { useState } from "react";
import Catalogue from "./assets/Catalouge";
import Categories from "./assets/Categories";
import NavBar from "./assets/NavBar";
const App: React.FC = () => {
  const [activeFlavors, setActiveFlavors] = useState<string[]>([]);

  const handleFlavorsChange = (flavors: string[]) => {
    setActiveFlavors(flavors);
  };

  return (
    <div>
      <NavBar />
      {/* Flavor Selector */}
      <Categories
        activeFlavors={activeFlavors}
        onFlavorsChange={handleFlavorsChange}
      />

      {/* Catalogue Filtered by Selected Flavors */}
      <Catalogue activeFlavors={activeFlavors} />
    </div>
  );
};

export default App;
