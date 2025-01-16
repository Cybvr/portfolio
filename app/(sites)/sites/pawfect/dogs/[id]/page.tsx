import { 
  Heart,
  MapPin,
  Calendar,
  Weight,
  Activity,
  Shield,
  MessageCircle,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';

const dogDetails = {
  id: 1,
  name: "Luna",
  breed: "Golden Retriever",
  price: "$1,200",
  age: "8 months",
  weight: "25 lbs",
  location: "San Francisco, CA",
  energy: "High",
  description: "Luna is a beautiful, friendly Golden Retriever puppy who loves to play and cuddle. She's great with children and other pets, making her the perfect addition to any family. She's been trained in basic commands and is already house-trained.",
  features: [
    "Vaccinated",
    "Microchipped",
    "Health Certificate",
    "Dewormed",
    "Vet Checked",
    "Papers Available"
  ],
  images: [
    "https://images.unsplash.com/photo-1587402092301-725e37c70fd8",
    "https://images.unsplash.com/photo-1633722715463-d30f4f325e24",
    "https://images.unsplash.com/photo-1612774412771-005ed8e861d2",
    "https://images.unsplash.com/photo-1612774412774-005ed8e861d2"
  ],
  breeder: {
    name: "Golden Paws Kennel",
    rating: 4.9,
    verified: true,
    experience: "15+ years"
  }
};

export default function DogDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {dogDetails.images.map((image, index) => (
            <div key={index} className={index === 0 ? "col-span-2 row-span-2" : ""}>
              <img
                src={image}
                alt={`${dogDetails.name} ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                style={{ height: index === 0 ? '400px' : '200px' }}
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{dogDetails.name}</h1>
                  <p className="text-xl text-gray-600">{dogDetails.breed}</p>
                </div>
                <Heart className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-600">{dogDetails.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-600">{dogDetails.age}</span>
                </div>
                <div className="flex items-center">
                  <Weight className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-600">{dogDetails.weight}</span>
                </div>
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-600">{dogDetails.energy} Energy</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{dogDetails.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {dogDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Breeder Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-semibold">{dogDetails.breeder.name}</h3>
                    <p className="text-gray-600">Experience: {dogDetails.breeder.experience}</p>
                  </div>
                </div>
                {dogDetails.breeder.verified && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Verified Breeder
                  </span>
                )}
              </div>
              <div className="flex space-x-4">
                <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Breeder
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                  <span className="text-3xl font-bold text-gray-900">{dogDetails.price}</span>
                </div>
                <p className="text-gray-600">Includes registration & health guarantee</p>
              </div>

              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-4">
                Reserve Now
              </button>

              <button className="w-full border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Schedule Visit
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  100% Health Guarantee
                  <br />
                  Free 30-Day Insurance
                  <br />
                  Secure Payment Process
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}