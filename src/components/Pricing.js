import { useState } from "react";

const Section = ({ title, description, isVisible }) => {
  return (
    <div
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-xl shadow-md overflow-hidden"
      style={{ minWidth: "300px" }}
    >
      <div className="p-8">
        <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </h3>
        {isVisible && <p className="mt-2 text-gray-500">{description}</p>}
      </div>
      <div className="flex justify-normal p-4 ml-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [sectionConfig, setSectionConfig] = useState({
    sec1: true,
    sec2: false,
    sec3: true,
  });

  return (
    <div className="flex flex-col items-center mt-12 space-y-4">
      <Section
        isVisible={sectionConfig.sec1}
        title="Section 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
      />
      <Section
        isVisible={sectionConfig.sec2}
        title="Section 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
      />
      <Section
        isVisible={sectionConfig.sec3}
        title="Section 1"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit..."
      />
    </div>
  );
};

export default Pricing;
