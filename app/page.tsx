export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Polypo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Website is ready for development
        </p>
        <div className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg">
          Development Server Running ✓
        </div>
      </div>
    </div>
  );
}
