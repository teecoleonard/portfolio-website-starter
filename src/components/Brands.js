import React from "react";

// import brands data
import { brands } from "../data";

const Brands = () => {
  return (
    <section className="min-h-[100px] bg-tertiary flex items-center">
      <div class="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
