import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      <h1 className="text-6xl font-bold mb-2">Error Occurred</h1>
      <p className="text-2xl mb-2">Something went wrong!</p>

      {err && (
        <div className="mt-4 text-center text-lg px-4 py-2 bg-red-100 border border-red-400 rounded">
          <p>{err.message || "An unknown error occurred"}</p>
        </div>
      )}
      <p className="mt-4 text-lg">
        We're sorry, there was a problem processing your request. Please go back
        to the
        <Link href="/" className="text-blue-500 hover:underline">
          homepage
        </Link>
        or contact
        <Link href="/support" className="text-blue-500 hover:underline">
          support
        </Link>
        .
      </p>
    </div>
  );
};

export default Error;
