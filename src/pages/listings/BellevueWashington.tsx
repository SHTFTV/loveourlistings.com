import ListingDetailPage from "@/components/ListingDetailPage";

const BellevueWashington = () => (
  <ListingDetailPage
    image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80"
    price="$79,000,000 USD"
    agent="Windermere Real Estate"
    location="Bellevue, WA"
    badge="MOST EXPENSIVE IN WA"
    externalUrl="https://mynorthwest.com/lifestyle/bellevue-mansion-most-expensive/4156328"
    description="Washington State's most expensive home listing at $79M, this Bellevue estate redefines Pacific Northwest luxury. Set on a sprawling lakefront lot with private dock access to Lake Washington, the compound includes a 20,000+ sq ft main residence, separate guest house, and grounds designed by a landscape architecture firm that has shaped some of the region's most important private estates. Tech industry executives have made Bellevue the new epicenter of West Coast wealth."
    features={["20,000+ sq ft lakefront estate", "Private dock on Lake Washington", "Separate guest house", "Indoor basketball court", "Wine cave & tasting lounge", "Smart home throughout", "Helipad-ready grounds", "Most expensive listing in WA history"]}
    neighborhood="Bellevue has transformed from a Seattle suburb into one of America's wealthiest cities, home to tech headquarters including Microsoft, Meta, and Amazon satellite campuses. The Points neighborhoods along Lake Washington feature some of the most expensive residential real estate on the West Coast, combining natural beauty with proximity to the region's economic engine."
  />
);

export default BellevueWashington;
