export const adventures = {
  adventure1: {
    name: "Alice's Coffee Crawl",
    route: [
      [34.0689, -118.4452],  // UCLA (Start)
      [34.0622, -118.2507],  // Bluebird Café
      [34.0655, -118.2518],  // Tierra Mia Coffee
      [34.0722, -118.2607],  // Brew Haven
      [34.0689, -118.4452],  // UCLA (End)
    ],
    stops: [
      {
        id: 1,
        type: "restaurant",
        name: "Bluebird Café",
        coordinates: [34.0622, -118.2507],
        description: "A cozy coffee spot known for its artisan blends.",
        image: "/images/bluebird-cafe.jpg",
        tags: ["Coffee", "Casual", "Black-Owned"],
      },
      {
        id: 2,
        type: "restaurant",
        name: "Tierra Mia Coffee",
        coordinates: [34.0655, -118.2518],
        description: "A Latin-inspired coffee chain known for its rich flavors and cozy atmosphere.",
        image: "/images/tierra-mia-coffee.jpg",
        tags: ["Coffee", "Latino-Owned", "Casual"],
      },
      {
        id: 3,
        type: "restaurant",
        name: "Brew Haven",
        coordinates: [34.0722, -118.2607],
        description: "Trendy cafe with unique coffee roasts.",
        image: "/images/brew-haven.jpg",
        tags: ["Coffee", "Trendy", "Wheelchair-Accessible"],
      },
    ],
  },
  
  adventure2: {
    name: "Downtown LA Art & Culture Walk",
    route: [
      [34.0522, -118.2437],  // Start: Los Angeles City Hall
      [34.0521, -118.2427],  // The Broad Museum
      [34.0470, -118.2498],  // Grand Central Market
      [34.0392, -118.2547],  // Walt Disney Concert Hall
      [34.0522, -118.2437],  // End: City Hall (Loop)
    ],
    stops: [
      {
        id: 1,
        type: "destination",
        name: "Los Angeles City Hall",
        coordinates: [34.0522, -118.2437],
        description: "Iconic building and a symbol of LA's civic pride.",
        image: "/images/city-hall.jpg",
        tags: ["Landmark", "Government"],
      },
      {
        id: 2,
        type: "destination",
        name: "The Broad Museum",
        coordinates: [34.0521, -118.2427],
        description: "Contemporary art museum featuring works by Jeff Koons, Roy Lichtenstein, and more.",
        image: "/images/the-broad.jpg",
        tags: ["Art", "Museum"],
      },
      {
        id: 3,
        type: "destination",
        name: "Grand Central Market",
        coordinates: [34.0470, -118.2498],
        description: "Bustling market with local food stalls offering a variety of delicious bites.",
        image: "/images/grand-central-market.jpg",
        tags: ["Food", "Casual"],
      },
      {
        id: 4,
        type: "destination",
        name: "Walt Disney Concert Hall",
        coordinates: [34.0392, -118.2547],
        description: "Stunning Frank Gehry-designed concert hall.",
        image: "/images/walt-disney-hall.jpg",
        tags: ["Art", "Music", "Landmark"],
      },
    ],
  },
  
  adventure3: {
    name: "Santa Monica Beach and Pier Adventure",
    route: [
      [34.0689, -118.4452],  // Start: Westwood (UCLA)
      [34.0149, -118.4953],  // Santa Monica Pier
      [34.0226, -118.4957],  // Venice Beach
      [34.0206, -118.4957],  // Muscle Beach
      [34.0689, -118.4452],  // End: Westwood (UCLA)
    ],
    stops: [
      {
        id: 1,
        type: "destination",
        name: "Santa Monica Pier",
        coordinates: [34.0149, -118.4953],
        description: "Iconic pier with rides, restaurants, and beautiful ocean views.",
        image: "/images/santa-monica-pier.jpg",
        tags: ["Tourist Attraction", "Beach"],
      },
      {
        id: 2,
        type: "destination",
        name: "Venice Beach",
        coordinates: [34.0226, -118.4957],
        description: "Lively beach with a boardwalk, street performers, and unique culture.",
        image: "/images/venice-beach.jpg",
        tags: ["Beach", "Casual", "Street Performers"],
      },
      {
        id: 3,
        type: "destination",
        name: "Muscle Beach",
        coordinates: [34.0206, -118.4957],
        description: "Famous outdoor gym on Venice Beach.",
        image: "/images/muscle-beach.jpg",
        tags: ["Fitness", "Beach"],
      },
    ],
  },
  
  adventure4: {
    name: "Los Feliz Hike and Coffee",
    route: [
      [34.1056, -118.2932],  // Start: Los Feliz
      [34.1123, -118.2879],  // Griffith Observatory
      [34.1202, -118.3264],  // The Trails Cafe (Coffee stop)
      [34.1056, -118.2932],  // End: Los Feliz
    ],
    stops: [
      {
        id: 1,
        type: "destination",
        name: "Griffith Observatory",
        coordinates: [34.1123, -118.2879],
        description: "Offers amazing views of LA and the Hollywood Sign.",
        image: "/images/griffith-observatory.jpg",
        tags: ["Tourist Attraction", "Nature", "Hiking"],
      },
      {
        id: 2,
        type: "restaurant",
        name: "The Trails Cafe",
        coordinates: [34.1202, -118.3264],
        description: "A cozy coffee shop perfect for hikers to refuel.",
        image: "/images/trails-cafe.jpg",
        tags: ["Coffee", "Casual"],
      },
    ],
  },
  
  adventure5: {
    name: "DTLA Shopping & Food Crawl",
    route: [
      [34.0407, -118.2559],  // Start: Grand Central Market
      [34.0423, -118.2487],  // The Last Bookstore
      [34.0399, -118.2480],  // Grand Park
      [34.0407, -118.2559],  // End: Grand Central Market (Loop)
    ],
    stops: [
      {
        id: 1,
        type: "destination",
        name: "Grand Central Market",
        coordinates: [34.0407, -118.2559],
        description: "DTLA's popular food hall with a variety of delicious meals.",
        image: "/images/grand-central-market.jpg",
        tags: ["Food", "Casual", "Local"],
      },
      {
        id: 2,
        type: "destination",
        name: "The Last Bookstore",
        coordinates: [34.0423, -118.2487],
        description: "A whimsical and artistic bookstore with a great selection of books.",
        image: "/images/the-last-bookstore.jpg",
        tags: ["Books", "Unique", "Arts"],
      },
      {
        id: 3,
        type: "destination",
        name: "Grand Park",
        coordinates: [34.0399, -118.2480],
        description: "A beautiful park with fountains and greenery in the heart of Downtown LA.",
        image: "/images/grand-park.jpg",
        tags: ["Park", "Outdoor", "Relaxing"],
      },
    ],
  },
};
