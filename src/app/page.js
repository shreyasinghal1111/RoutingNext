import Image from "next/image";
import Footer from "./components/Footer/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gray-900">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Home Page</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 text-white">
        <Link href="/admin/dashboard" className="text-3xl font-bold mb-4 pr-10 hover:text-blue-500">Go to Admin Dashboard</Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Learn More
        </button>
        <h2 className="text-3xl font-bold mb-4 mt-8">Our Features</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </main>
      <Footer/>
    </div>
  );
}