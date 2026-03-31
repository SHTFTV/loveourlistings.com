import RealtorProfile from "@/components/RealtorProfile";
import portrait from "@/assets/becky-zhou-hill.jpg";
import heroImage from "@/assets/surrey-whiterock-hero.jpg";

const listings = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "$3,288,000 CAD",
    address: "14567 Marine Drive, White Rock, BC",
    beds: 5,
    baths: 4,
    sqft: "4,200 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "$2,750,000 CAD",
    address: "2145 Ocean Park Road, Surrey, BC",
    beds: 4,
    baths: 3,
    sqft: "3,800 sq ft",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    price: "$4,100,000 CAD",
    address: "1289 Crescent Road, White Rock, BC",
    beds: 6,
    baths: 5,
    sqft: "5,600 sq ft",
  },
];

const BeckyZhouHill = () => (
  <RealtorProfile
    name="Becky Zhou Hill"
    title="Premier Luxury Realtor"
    region="Surrey & White Rock"
    tagline="The definitive voice in South Surrey and White Rock luxury real estate."
    bio="With over 15 years of experience in the Surrey and White Rock luxury market, Becky Zhou Hill has earned her reputation as the region's premier luxury realtor. Specializing in oceanfront estates, custom-built homes, and high-value investment properties, Becky combines deep local knowledge with an international client network. Her boutique approach to marketing — including the iconic Heart-Shaped Sign — ensures every listing receives the attention it deserves. Fluent in Mandarin and English, Becky bridges cultures and connects discerning buyers with their dream properties along the stunning Semiahmoo Peninsula."
    portrait={portrait}
    heroImage={heroImage}
    phone="(604) 555-0188"
    address="15355 24 Ave #203, Surrey, BC V4A 2H9"
    website="https://whiterock.io"
    googleReviews="5.0 · 47 Google reviews"
    hours="Open · Closes 8 p.m."
    specialties={[
      "Luxury Waterfront",
      "White Rock Estates",
      "South Surrey",
      "Pre-Construction",
      "Investment Properties",
      "Mandarin Speaking",
    ]}
    listings={listings}
  />
);

export default BeckyZhouHill;
