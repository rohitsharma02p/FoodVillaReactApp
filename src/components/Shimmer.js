import "../index.css";

const ShimmerCard = () => {
  return (
    <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md w-96">
      <div className="h-40 bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-100 rounded animate-pulse mb-2"></div>
        <div className="h-3 bg-gray-100 rounded animate-pulse mb-2"></div>
        <div className="h-3 bg-gray-100 rounded animate-pulse"></div>
      </div>
    </div>
  );
};
const Shimmer = ({ numberOfCards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {Array.from({ length: numberOfCards }, (_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
