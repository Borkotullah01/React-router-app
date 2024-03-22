import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    // console.log(post)
    const {id, title, body} = post;
    return (
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-center text-5xl">{id}</h2>
            <p className='text-center text-2xl font-bold'>{title}</p>
            <p className='text-base'>{body}</p>

            <div className="card-actions">
              <button className="btn btn-primary"> <Link to={`/posts/${id}`}>Show Details</Link> </button>
            </div>
          </div>
        </div>
    );
};
Post.propTypes = {
    post:PropTypes.object,
}
export default Post;