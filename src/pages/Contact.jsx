import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col justify-center items-center gap-6 bg-c1 py-24">
      <Helmet>
        <title>Gadgets | Contact Us</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-white text-center">Contact Us</h2>
      <label className="input input-bordered flex items-center gap-2 w-96">
        <input type="text" className="grow" placeholder="First Name" />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-96">
        <input type="text" className="grow" placeholder="Last Name" />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-96">
        <input type="email" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-96">
        <input type="password" className="grow" placeholder="Password" />
      </label>
      <button className="btn bg-white text-c1 text-lg px-6">Submit</button>
    </div>
  );
};

export default Contact;
