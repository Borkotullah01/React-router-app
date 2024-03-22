
const About = () => {
    return (
        <div className="w-8/12 mx-auto py-6">
            <h1 className="text-center text-4xl">About Us</h1>
            <p className="text-center">We Allwayes try to Best  services Provide</p>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default About;