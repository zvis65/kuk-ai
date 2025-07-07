function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-200 to-purple-100 min-h-screen">
      <div className="min-h-screen flex items-start justify-center pt-8">
        <h1>Test</h1>
      </div>
    
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-8 bg-gradient-to-br from-gray-200 to-purple-100">
        <input
          className="w-3/4 max-w-4xl px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your prompt..."
        />
      </div>
    </div>
  );
}

export default Home;
