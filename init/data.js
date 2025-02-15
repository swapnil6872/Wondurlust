const sampleListings = [
    {
    title: "Cozy Beachfront Cottage",
    description:
    "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
    "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
    },
    {
    title: "Modern Loft in Downtown",
    description:
    "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
    },
    {
    title: "Mountain Retreat",
    description:
    "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
    },
    {
    title: "Historic Villa in Tuscany",
    description:
    "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
    },
    {
    title: "Secluded Treehouse Getaway",
    description:
    "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
    },
    {
    title: "Beachfront Paradise",
    description:
    "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    },
    {
    title: "Rustic Cabin by the Lake",
    description:
    "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    },
    {
    title: "Luxury Penthouse with City Views",
    description:
    "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
    "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    },
    {
    title: "Ski-In/Ski-Out Chalet",
    description:
    "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
    "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    },
    {
    title: "Safari Lodge in the Serengeti",
    description:
    "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image:
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    },
    {
    title: "Secluded Beach House in Costa Rica",
    description:
    "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    },
    
    {
    title: "Mountain Retreat",
    description: "Ideal for adventure seekers and nature lovers.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 5211,
    location: "Bali",
    country: "Indonesia",
    },
    {
    title: "Somewhere in the woods",
    description: "A hidden gem perfect for relaxation.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 1386,
    location: "Paris",
    country: "France",
    },
    {
    title: "Historic Castle",
    description: "A unique and unforgettable experience.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 752,
    location: "New York",
    country: "United States",
    },
    {
    title: "Urban Chic Apartment",
    description: "A perfect getaway with stunning views.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 8243,
    location: "Dubai",
    country: "UAE",
    },
    {
    title: "Floating Water Villa",
    description: "An adventure-filled stay awaits you.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 9353,
    location: "Maldives",
    country: "Maldives",
    },
    {
    title: "Mountain Retreat",
    description: "A romantic escape for couples.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 3595,
    location: "Tokyo",
    country: "Japan",
    },
    {
    title: "Sunny Beach House",
    description: "A hidden gem perfect for relaxation.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 2077,
    location: "London",
    country: "United Kingdom",
    },
    {
    title: "Hidden Gem Cottage",
    description: "Experience luxury like never before.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 1954,
    location: "Rome",
    country: "Italy",
    },
    {
    title: "Floating Water Villa",
    description: "Enjoy spectacular sunrise and sunset views.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 4731,
    location: "Barcelona",
    country: "Spain",
    },
    {
    title: "Grand Palace Hotel",
    description: "Surrounded by the most stunning landscapes.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 5319,
    location: "Los Angeles",
    country: "United States",
    },
    {
    title: "Oceanfront Condo",
    description: "Surrounded by the most stunning landscapes.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 6199,
    location: "Aspen",
    country: "United States",
    },
    {
    title: "Modern City Apartment",
    description: "A hidden gem perfect for relaxation.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 6942,
    location: "Santorini",
    country: "Greece",
    },
    {
    title: "Snowy Mountain Lodge",
    description: "A perfect getaway with stunning views.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 3853,
    location: "Cape Town",
    country: "South Africa",
    },
    {
    title: "Floating Water Villa",
    description: "The best vacation spot for relaxation.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 999,
    location: "Bangkok",
    country: "Thailand",
    },
    {
    title: "Tropical Villa",
    description: "A charming stay with modern amenities.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 2478,
    location: "Singapore",
    country: "Singapore",
    },
    {
    title: "Private Island Escape",
    description: "Surrounded by the most stunning landscapes.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 2279,
    location: "Amsterdam",
    country: "Netherlands",
    },
    {
    title: "Historic Castle",
    description: "Enjoy spectacular sunrise and sunset views.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 7275,
    location: "Rio de Janeiro",
    country: "Brazil",
    },
    {
    title: "Hillside Bungalow",
    description: "Enjoy spectacular sunrise and sunset views.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 6330,
    location: "Phuket",
    country: "Thailand",
    },
    {
    title: "Floating Water Villa",
    description: "Unplug and recharge in this peaceful getaway.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 2379,
    location: "Sydney",
    country: "Australia",
    },
    {
    title: "Beach Hut Hideaway",
    description: "Ideal for adventure seekers and nature lovers.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 3536,
    location: "Vancouver",
    country: "Canada",
    },
    {
    title: "Jungle Treehouse",
    description: "An adventure-filled stay awaits you.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 5898,
    location: "Bali",
    country: "Indonesia",
    },
    {
    title: "Desert Oasis",
    description: "A charming stay with modern amenities.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 8291,
    location: "Paris",
    country: "France",
    },
    {
    title: "Jungle Treehouse",
    description: "Explore the beauty of the surroundings.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 5521,
    location: "New York",
    country: "United States",
    },
    {
    title: "Luxury Penthouse",
    description: "Experience luxury like never before.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 722,
    location: "Dubai",
    country: "UAE",
    },
    {
    title: "Rustic Farmhouse",
    description: "A perfect mix of tradition and modern comfort.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 6462,
    location: "Maldives",
    country: "Maldives",
    },
    {
    title: "Ski Resort Chalet",
    description: "Unplug and recharge in this peaceful getaway.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 5892,
    location: "Tokyo",
    country: "Japan",
    },
    {
    title: "Modern City Apartment",
    description: "A perfect mix of tradition and modern comfort.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 8018,
    location: "London",
    country: "United Kingdom",
    },
    {
    title: "Modern City Apartment",
    description: "Surrounded by the most stunning landscapes.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 4591,
    location: "Rome",
    country: "Italy",
    },
    {
    title: "Grand Palace Hotel",
    description: "A unique and unforgettable experience.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 3335,
    location: "Barcelona",
    country: "Spain",
    },
    {
    title: "Modern City Apartment",
    description: "A perfect getaway with stunning views.",
    image:"https://www.cvvillas.com/dynamic-images/5000-5999/5301/5301_c=(0,239,3746,2106)_w=1366_h=768.webp?v=202405071552",
    price: 9268,
    location: "Los Angeles",
    country: "United States",
    },
    ];
    
    module.exports = { data : sampleListings };