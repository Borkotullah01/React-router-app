import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const AllPosts = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div className="w-8/12 mx-auto">
            <h1 className="text-center text-4xl">Total Posts {posts.length}</h1>          
            <div className="mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 items-center justify-center">
                {
                posts.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default AllPosts;