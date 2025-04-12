import BlogMainContent from "../components/Blogmaincontent";
import BlogSidebar from "../components/Blogsidebar";
import CommentForm from "../components/commentform";
import SubscribeSection from "../components/SubscribeSection";
import image from "../images/photo1.png";
import Navbar from "../components/Navbar";

const SingleBlog = () => {
  return (
    <div className="bg-white">
      
      <div className="relative h-[400px] w-full">
        <img
          src={image}
          alt="Blog Cover"
          className="w-full h-full object-cover"
        />
       
        <div className="absolute inset-0">
          <Navbar />
        </div>
        {/* Hero text content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-20">
          <h1 className="text-4xl text-white font-bold max-w-3xl text-center">
         Travel Stories For Now and Future
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <BlogMainContent />
          <CommentForm />
        </div>
        <BlogSidebar />
      </div>

      <SubscribeSection />
    </div>
  );
};

export default SingleBlog;