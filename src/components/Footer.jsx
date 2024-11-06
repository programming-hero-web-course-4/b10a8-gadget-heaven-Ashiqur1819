const Footer = () => {
  return (
    <footer className="bg-white py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl text-c2 font-bold mb-3">Gadget Heaven</h2>
          <p className="text-c3 px-4">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="divider px-3 md:px-8 lg:px-12"></div>
        <div className="footer p-6 justify-center gap-12 md:gap-40 lg:gap-60">
          <nav className="flex flex-col gap-2  text-c3">
            <h6 className="text-c2 text-lg font-semibold mb-3">Products</h6>
            <a className="link link-hover">Smartphones</a>
            <a className="link link-hover">Laptops</a>
            <a className="link link-hover">Tablets</a>
            <a className="link link-hover">Smartwatches</a>
            <a className="link link-hover">Accessories</a>
          </nav>
          <nav className="flex flex-col gap-2  text-c3">
            <h6 className=" text-c2 text-lg font-semibold mb-3">Quick Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Statistics</a>
            <a className="link link-hover">Dashboard</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav className="flex flex-col gap-2  text-c3">
            <h6 className="text-c2 text-lg font-semibold mb-3">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
