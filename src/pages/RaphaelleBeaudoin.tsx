import RealtorProfile from "@/components/RealtorProfile";
import portrait from "@/assets/raphaelle-beaudoin.jpg";
import heroImage from "@/assets/chilliwack-abbotsford-hero.jpg";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    price: "$1,895,000 CAD",
    address: "43869 Progress Way, Chilliwack, BC",
    beds: 5,
    baths: 4,
    sqft: "4,100 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    price: "$2,350,000 CAD",
    address: "34521 Townline Road, Abbotsford, BC",
    beds: 6,
    baths: 5,
    sqft: "5,200 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80",
    price: "$1,650,000 CAD",
    address: "8901 Hillcrest Avenue, Chilliwack, BC",
    beds: 4,
    baths: 3,
    sqft: "3,400 sq ft",
  },
];

const RaphaelleBeaudoin = () => (
  <RealtorProfile
    name="Raphaelle Beaudoin"
    title="Luxury Listing Realtor"
    region="Chilliwack & Abbotsford"
    tagline="Fraser Valley's trusted authority in luxury estate properties."
    bio="Raphaelle Beaudoin brings passion and precision to the Chilliwack and Abbotsford luxury real estate market. With a 5.0 Google rating across 14 reviews, her reputation speaks for itself. Specializing in estate homes, acreages, and luxury new builds across the Fraser Valley, Raphaelle combines local expertise with a refined marketing approach that maximizes exposure for every property. Her partnership with the Luxury Heart Portfolio and the iconic Heart-Shaped Sign elevates her listings above the competition, creating unforgettable curb appeal in British Columbia's fastest-growing luxury corridor."
    portrait={portrait}
    heroImage={heroImage}
    phone="(604) 316-8938"
    address="43869 Progress Way #102, Chilliwack, BC V2R 0E6"
    website="https://abbotsford.io"
    googleReviews="5.0 · 14 Google reviews"
    hours="Open · Closes 11 p.m."
    specialties={[
      "Fraser Valley Estates",
      "Acreage Properties",
      "Luxury New Builds",
      "Chilliwack",
      "Abbotsford",
      "French Speaking",
    ]}
    listings={listings}
  />
);

export default RaphaelleBeaudoin;
