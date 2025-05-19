import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r text-white">
      <div className="text-center p-6 rounded-lg shadow-lg bg-white text-gray-900 max-w-lg w-full">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-2xl mb-4">Something went wrong.</p>
        <p className="text-xl mb-6">{error.statusText || error.message}</p>
        <div className="flex justify-center gap-4">
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Go Home
          </a>
          <a
            href="mailto:support@example.com"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
