import { useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    console.log(details)
    const {id, title, body} = details;
    return (
        <div className="w-8/12 mx-auto py-10">
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-center text-5xl">{id}</h2>
                <p className='text-center text-2xl font-bold'>{title}</p>
                <p className='text-base'>{body}</p>
              </div>
            </div>
        </div>
    );
};

export default Details;