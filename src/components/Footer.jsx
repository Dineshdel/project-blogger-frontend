const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-gradient-to-l from-gray-300 to-gray-400 py-4 px-1 md:px-[50px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md">
        <div className="flex flex-col text-black">
          <p>Featured Blogs / Most Viewed / Recent Posts / About Us </p>
          <p></p>
        </div>

        <div className="flex items-center font-bold text-black">
          <p>All rights reserved @BlogVerse 2023</p>
        </div>

        {/* <p className="py-2 pb-6 text-center text-white bg-black text-sm"></p> */}

        <div className="flex flex-col  text-black">
          <p>Support / Privacy Policy / Terms & Conditions</p>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Footer;
