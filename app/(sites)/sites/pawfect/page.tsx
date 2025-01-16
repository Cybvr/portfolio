import { 
  ShieldCheck,
  Award,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'PawfectMatch - Find Your Perfect Furry Friend',
  description: 'Discover your ideal canine companion from our carefully curated selection of loving, healthy dogs.',
};

const featuredDogs = [
  {
    id: "luna-golden",
    image: "https://images.unsplash.com/photo-1587402092301-725e37c70fd8",
    name: "Luna",
    breed: "Golden Retriever",
    price: "$1,200"
  },
  {
    id: "max-shepherd",
    image: "https://images.unsplash.com/photo-1577175889968-f551f5944abd",
    name: "Max",
    breed: "German Shepherd",
    price: "$1,500"
  },
  {
    id: "bella-bulldog",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3",
    name: "Bella",
    breed: "French Bulldog",
    price: "$2,000"
  },
  {
    id: "charlie-lab",
    image: "https://images.unsplash.com/photo-1553698217-934b000f1f00",
    name: "Charlie",
    breed: "Labrador",
    price: "$1,300"
  }
];

export default function PawfectPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Find Your Perfect Furry Friend</h1>
            <p className="text-xl mb-8">Discover your ideal canine companion from our carefully curated selection of loving, healthy dogs.</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Browse Dogs
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose PawfectMatch?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <ShieldCheck className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Breeders</h3>
              <p className="text-gray-600">All our partner breeders undergo strict verification processes.</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Guaranteed</h3>
              <p className="text-gray-600">Every puppy comes with a comprehensive health guarantee.</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lifetime Support</h3>
              <p className="text-gray-600">Our team is here to support you throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dogs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Dogs</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {featuredDogs.map((dog) => (
              <div key={dog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={dog.image} 
                  alt={dog.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{dog.name}</h3>
                  <p className="text-gray-600 mb-2">{dog.breed}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-600 font-bold">{dog.price}</span>
                    <Link 
                      href={`/sites/pawfect/dogs/${dog.id}`}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}