import React, { useState } from "react";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white fixed w-full z-10 top-0 shadow">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <h1 className="text-3xl font-bold">McDonald's</h1>
          <nav>
            <div className="hidden md:flex space-x-6">
              <Link
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="menu"
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Menu
              </Link>
              <Link
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Tentang Kami
              </Link>
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:underline cursor-pointer"
              >
                Kontak
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </nav>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-red-600">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link
                to="home"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="menu"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={500}
                className="block text-white hover:underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3')`,
        }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeInDown">
              Selamat Datang di McDonald's
            </h2>
            <p className="text-xl md:text-2xl mb-8 animate-fadeInUp">
              Makanan lezat, langsung untuk Anda
            </p>
            <Link
              to="menu"
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-red-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-red-700 inline-block cursor-pointer animate-fadeIn"
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Menu Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Item Menu 1 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1577973479360-62e8e4759cf4"
                alt="Cheeseburger"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Cheeseburger</h3>
                <p className="text-gray-700 mb-4">
                  Patty daging sapi juicy dengan keju, selada, dan tomat.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* Item Menu 2 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
                alt="Kentang Goreng"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Kentang Goreng</h3>
                <p className="text-gray-700 mb-4">
                  Kentang goreng emas renyah, sempurna sebagai pendamping.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* Item Menu 3 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
                alt="Milkshake"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Milkshake</h3>
                <p className="text-gray-700 mb-4">
                  Milkshake creamy dengan berbagai rasa.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* Item Menu 4 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1647102398925-e23f6486ca04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ayam Goreng"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Ayam Goreng</h3>
                <p className="text-gray-700 mb-4">
                  Ayam goreng renyah dengan bumbu khas.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* Item Menu 5 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1627053947185-1d02dc9435ac?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="McFlurry"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">McFlurry</h3>
                <p className="text-gray-700 mb-4">
                  Es krim lembut dengan topping favorit Anda.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* Item Menu 6 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1601000937859-3031d1be1caa?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Apple Pie"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Apple Pie</h3>
                <p className="text-gray-700 mb-4">
                  Pai apel hangat dengan kulit renyah.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* Item Menu 7 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1624614466284-86de32bbc960?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="McNuggets"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">McNuggets</h3>
                <p className="text-gray-700 mb-4">
                  Nugget ayam lembut dengan saus pilihan Anda.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* Item Menu 8 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://plus.unsplash.com/premium_photo-1722908885987-628cef023cc9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Filet-O-Fish"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Filet-O-Fish</h3>
                <p className="text-gray-700 mb-4">
                  Ikan filet lembut dengan saus tartar dan keju.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
            {/* Item Menu 9 */}
            <div className="border rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1655734940582-3667ebefb516?q=80&w=2932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Big Mac"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Big Mac</h3>
                <p className="text-gray-700 mb-4">
                  Burger ikonik dengan dua lapis patty sapi dan saus spesial.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Tentang Kami</h2>
          <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto">
            McDonald's adalah restoran cepat saji terkemuka di dunia dengan
            lebih dari 37.000 lokasi di lebih dari 100 negara.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Kontak Kami</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700">Nama</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Nama Anda"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                placeholder="Email Anda"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Pesan</label>
              <textarea
                className="w-full border rounded px-3 py-2"
                rows="5"
                placeholder="Pesan Anda"
              ></textarea>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} McDonald's. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
