const BlogSidebar = () => {
    return (
      <aside className="space-y-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg"
        />
  
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
          <ul className="space-y-2 text-blue-600">
            
            <li>Top Beaches in Asia</li>
            <li>Backpacking Tips</li>
            <li>City vs Nature</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">Adventure</li>
            <li className="text-gray-600">Travel Tips</li>
            <li className="text-gray-600">Lifestyle</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">#Island</span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">#Explore</span>
          </div>
        </div>
      </aside>
    );
  };
  
  export default BlogSidebar;
  