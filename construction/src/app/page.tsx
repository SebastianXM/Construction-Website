import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            ConstructCo
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
            backgroundImage:
              "url('https://via.placeholder.com/1920x1080?text=Main+Construction+Site')",
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
            <h2 className="text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400">
              About Us
            </h2>
            <p className="text-lg mb-4 max-w-3xl mx-auto">
              ConstructCo has been a leader in the construction industry for
              over 20 years. We specialize in residential, commercial, and
              industrial projects, delivering high-quality workmanship and
              exceptional customer service. Our team of experienced
              professionals is dedicated to bringing your vision to life.
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
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="https://via.placeholder.com/400x300?text=Residential+Construction"
                  alt="Residential Construction"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-blue-300">
                  Residential Construction
                </h3>
                <p className="text-sm">
                  Building custom homes and renovations with attention to detail
                  and quality craftsmanship.
                </p>
              </div>
              {/* Service 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="https://via.placeholder.com/400x300?text=Commercial+Projects"
                  alt="Commercial Projects"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-blue-300">
                  Commercial Projects
                </h3>
                <p className="text-sm">
                  Developing commercial spaces, office buildings, and retail
                  outlets tailored to your business needs.
                </p>
              </div>
              {/* Service 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <Image
                  src="https://via.placeholder.com/400x300?text=Renovations+%26+Remodeling"
                  alt="Renovations & Remodeling"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-blue-500 dark:text-blue-300">
                  Renovations & Remodeling
                </h3>
                <p className="text-sm">
                  Transforming existing structures with modern designs and
                  functional improvements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <p className="text-lg mb-4">
                <strong>Address:</strong> 123 Construction Ave, Building City,
                ST 12345
              </p>
              <p className="text-lg mb-4">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-lg mb-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@constructco.com"
                  className="text-blue-500 hover:underline"
                >
                  info@constructco.com
                </a>
              </p>
              <p className="text-lg">
                We are available Monday - Friday, 9 AM - 5 PM.
              </p>
              {/* You can add a contact form here later */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-gray-300 dark:text-gray-400 py-8 text-center">
        <div className="container mx-auto px-6">
          <p>
            &copy; {new Date().getFullYear()} ConstructCo. All rights reserved.
          </p>
          <p className="text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
