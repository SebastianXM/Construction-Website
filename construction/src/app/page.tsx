import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="bg-black dark:bg-gray-900 text-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            M&C General Construction
          </a>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section (Main Picture) */}
        <section
          id="home"
          className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
          style={{
            backgroundImage: "url('/brick.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Building Your Future, Today.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Your trusted partner in construction services.
            </p>
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
            >
              Get a Quote
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black dark:text-gray-300">
              About Us
            </h2>
            <p className="text-lg mb-4 max-w-3xl mx-auto">
              M&C General Construction has been a leader in the construction
              industry in the NY/NJ area. We specialize in residential,
              commercial, and industrial projects, delivering high-quality
              workmanship and exceptional customer service. Our team of
              experienced professionals is dedicated to bringing your vision to
              life.
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Our commitment to safety, innovation, and sustainability sets us
              apart. We believe in building strong relationships with our
              clients, ensuring transparency and collaboration throughout every
              project.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-gray-300">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="/bath.jpg"
                  alt="Bathroom"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-400">
                  Bathrooms
                </h3>
                <p className="text-sm">
                  Complete bathroom renovations and remodeling with modern
                  fixtures, custom tiles, and quality craftsmanship for your
                  perfect sanctuary.
                </p>
              </div>
              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="/kitchen.jpg"
                  alt="Kitchen"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-400">
                  Kitchens
                </h3>
                <p className="text-sm">
                  Custom kitchen design and renovation with premium cabinets,
                  countertops, and appliances to create the heart of your home.
                </p>
              </div>
              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="/living_room.jpg"
                  alt="Living Room"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-400">
                  And more...
                </h3>
                <p className="text-sm">
                  Living rooms, bedrooms, basements, and complete home
                  renovations. We transform any space with modern designs and
                  functional improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-gray-300">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                <strong>Phone:</strong> (347) 977-9078
              </p>
              <p className="text-lg mb-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:enrique_1926@live.com"
                  className="text-gray-800 hover:underline dark:text-gray-400"
                >
                  enrique_1926@live.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-gray-300 dark:text-gray-400 py-8 text-center">
        <div className="container mx-auto px-6">
          <p>
            &copy; {new Date().getFullYear()} M&C General Construction. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
