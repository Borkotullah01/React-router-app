
const Contact = () => {
    return (
        <div className="w-8/12 mx-auto py-6">
            <h1 className="text-center text-4xl">Contact Us</h1>
            <p className="text-center">Call me I am Allwayes waiting for Your call</p>
            <div className="card mx-auto mt-6 w-96 bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Do you want Call</h2>
                <p>Make Sure You want to call support center.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Call</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Contact;