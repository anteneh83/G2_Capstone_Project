
const BlogMainContent = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Top 5 Destinations for First Time Travelers</h2>
        <p className="text-gray-500 text-sm">April 5, 2025 • Adventure</p>
  
        <img
          src="/assets/blog-image-1.jpg"
          alt="Blog Detail"
          className="w-full h-96 object-cover rounded-lg"
        />
  
        <p className="text-gray-700 text-lg">
          Traveling opens up the heart and mind. These destinations offer a perfect blend
          of culture, adventure, and unforgettable memories...
        </p>
  
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
          “The journey of a thousand miles begins with a single step.” – Lao Tzu
        </blockquote>
  
        <p className="text-gray-700 text-lg">
          Whether you're climbing mountains or exploring beaches, it's about the people,
          the food, and the stories you collect.
        </p>
  
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#Adventure</span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#Nature</span>
          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">#Tour</span>
        </div>
      </div>
    );
  };
  
  export default BlogMainContent;
  