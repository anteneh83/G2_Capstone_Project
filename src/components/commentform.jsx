const CommentForm = () => {
    return (
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Leave a Comment</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            rows="4"
            placeholder="Write your comment..."
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Post Comment
          </button>
        </form>
      </div>
    );
  };
  
  export default CommentForm;
  