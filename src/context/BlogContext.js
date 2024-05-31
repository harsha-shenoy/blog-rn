import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonserver";

const blogReducer = (blogPosts, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload;
    case "add_blogpost":
      return [
        ...blogPosts,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "update_blogpost":
      return blogPosts.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );
    case "delete_blogpost":
      return blogPosts.filter((blogPost) => blogPost.id != action.payload);
    default:
      return blogPosts;
  }
};

const getBlogPost = (dispatch) => {
    console.log("Method called get");
  return async () => {
    const response = await jsonserver.get("/blogposts");
    dispatch({
      type: "get_blogpost",
      payload: response.data,
    });
  };
};

const addBlogPost = (dispatch) => {
    console.log("Method called add");
  return async (title, content, callback) => {
    await jsonserver.post("/blogposts", {
      title,
      content,
    });
    // dispatch({
    //   type: "add_blogpost",
    //   payload: {
    //     title,
    //     content,
    //   },
    // });
    if (callback) callback();
  };
};

const updateBlogPosts = (dispatch) => {
  console.log("Method called update");
  return async (id, title, content, callback) => {
    await jsonserver.put(`/blogposts/${id}`, { title, content });
    dispatch({
      type: "update_blogpost",
      payload: {
        id,
        title,
        content,
      },
    });
    if (callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, updateBlogPosts, getBlogPost },
  []
);

// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {
//   //   const [blogPosts, setBlogPost] = useState([]);

//   //   const addBlogPost = () => {
//   //     setBlogPost(
//   //         [...blogPosts,
//   //             { title: `Blog Post ${blogPosts.length + 1}`
//   //     }]);
//   //   };

//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   const addBlogPost = () => {
//     dispatch({ type: "add_blogpost" });
//   };

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
