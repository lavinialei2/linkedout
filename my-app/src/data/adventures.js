export const adventures = {
  adventure1: {
    name: "Plane Watch, Lalibela Dinner & Urban Lights",
    route: [
      [34.0689, -118.4452],  // UCLA (Start)
      [33.9425, -118.4083],  // LAX (Plane watching)
      [34.0617, -118.2784],  // Lalibela (Little Ethiopia, dinner)
      [34.0620, -118.2478],  // Urban Lights Installation (LACMA)
      [34.0689, -118.4452],  // UCLA (End)
    ],
    stops: [
      {
        id: 1,
        type: "destination",
        name: "LAX (Plane Watching)",
        coordinates: [33.9425, -118.4083],
        description: "A popular spot for watching planes land and take off from LAX.",
        image: "/places/lax.jpg",
        tags: ["Planes", "Observation", "Outdoor"],
      },
      {
        id: 2,
        type: "restaurant",
        name: "Lalibela (Little Ethiopia)",
        coordinates: [34.0617, -118.2784],
        description: "Cozy Ethiopian restaurant offering traditional dishes.",
        image: "/places/lalibela.jpeg",
        tags: ["Ethiopian", "Dinner", "Casual"],
      },
      {
        id: 3,
        type: "destination",
        name: "Urban Lights Installation (LACMA)",
        coordinates: [34.0620, -118.2478],
        description: "Iconic outdoor installation with over 200 street lamps, perfect for photos.",
        image: "/places/ulights.jpeg",
        tags: ["Art", "Outdoor", "Landmark"],
      },
    ],
  },

  // 2. SGV Food Crawl Adventure
  adventure2: {
    name: "SGV Food Crawl",
    route: [
      [34.0689, -118.4452],  // UCLA (Start)
      [34.0603, -118.1437],  // Mandarin Noodle House (Monterey Park)
      [34.0601, -118.1428],  // Kee Wah Bakery (Plaza)
      [34.0945, -118.1425],  // Sierra Vista Park
      [34.0962, -118.1287],  // Ten Ren Tea (Alhambra)
      [34.0869, -118.1300],  // Almansor Park (Alhambra)
      [34.0689, -118.4452],  // UCLA (End)
    ],
    stops: [
      {
        id: 1,
        type: "restaurant",
        name: "Mandarin Noodle House",
        coordinates: [34.0603, -118.1437],
        description: "Famous for their hand-pulled noodles and delicious dumplings.",
        image: "/places/mnh.jpeg",
        tags: ["Noodles", "Casual", "Local"],
      },
      {
        id: 2,
        type: "restaurant",
        name: "Kee Wah Bakery",
        coordinates: [34.0601, -118.1428],
        description: "Traditional Chinese bakery serving tasty pastries and buns.",
        image: "/places/keewah.jpg",
        tags: ["Bakery", "Asian", "Snacks"],
      },
      {
        id: 3,
        type: "destination",
        name: "Sierra Vista Park",
        coordinates: [34.0945, -118.1425],
        description: "A local park perfect for a short break during the crawl.",
        image: "/places/sierravista.jpeg",
        tags: ["Park", "Outdoor", "Relaxing"],
      },
      {
        id: 4,
        type: "restaurant",
        name: "Ten Ren Tea",
        coordinates: [34.0962, -118.1287],
        description: "Popular tea house offering bubble tea and traditional drinks.",
        image: "/places/tenren.jpeg",
        tags: ["Tea", "Bubble Tea", "Casual"],
      },
      {
        id: 5,
        type: "destination",
        name: "Almansor Park",
        coordinates: [34.0869, -118.1300],
        description: "A peaceful park with a lake, perfect for a relaxing stroll.",
        image: "/places/almansor.jpg",
        tags: ["Park", "Nature", "Outdoor"],
      },
    ],
  },

  // 3. SGV Cultural & Food Tour
  adventure3: {
    name: "SGV Cultural & Food Tour",
    route: [
      [34.0689, -118.4452],  // UCLA (Start)
      [34.0971, -118.1060],  // Chao Wei Ju (San Gabriel)
      [34.0965, -118.1054],  // Historic San Gabriel
      [34.1254, -118.1253],  // Huntington Library & Gardens
      [34.0689, -118.4452],  // UCLA (End)
    ],
    stops: [
      {
        id: 1,
        type: "restaurant",
        name: "Chao Wei Ju",
        coordinates: [34.0971, -118.1060],
        description: "Authentic Chinese restaurant famous for its unique flavors.",
        image: "/places/cwj.jpeg",
        tags: ["Chinese", "Restaurant", "Casual"],
      },
      {
        id: 2,
        type: "destination",
        name: "Historic San Gabriel",
        coordinates: [34.0965, -118.1054],
        description: "Explore the historical sites and architecture of San Gabriel.",
        image: "/places/sangab.jpeg",
        tags: ["History", "Cultural", "Outdoor"],
      },
      {
        id: 3,
        type: "destination",
        name: "Huntington Library & Gardens",
        coordinates: [34.1254, -118.1253],
        description: "Explore beautiful gardens and art collections at this cultural gem.",
        image: "/places/huntington.jpg",
        tags: ["Museum", "Art", "Nature"],
      },
    ],
  },

  // 4. Venice Creamery, Beach & Mitsuwa Marketplace
  adventure4: {
    name: "Venice Creamery, Beach & Mitsuwa Marketplace",
    route: [
      [34.0689, -118.4452],
      [33.9982, -118.4719],  // Wanderlust Creamery (Venice)
      [33.99, -118.478],  // Venice Beach
      [33.9989, -118.4792],  // Mitsuwa Marketplace
      [34.0689, -118.4452],
    ],
    stops: [
      {
        id: 1,
        type: "restaurant",
        name: "Wanderlust Creamery",
        coordinates: [33.9982, -118.4719],
        description: "Trendy ice cream shop offering unique, globally inspired flavors.",
        image: "/places/icecream.jpeg",
        tags: ["Ice Cream", "Dessert", "Trendy"],
      },
      {
        id: 2,
        type: "destination",
        name: "Venice Beach",
        coordinates: [33.99, -118.478],
        description: "Lively beach with a boardwalk, street performers, and unique culture.",
        image: "/places/venice.jpeg",
        tags: ["Beach", "Casual", "Street Performers"],
      },
      {
        id: 3,
        type: "destination",
        name: "Mitsuwa Marketplace",
        coordinates: [33.9989, -118.4792],
        description: "Japanese supermarket and food court with authentic Asian cuisine.",
        image: "/places/mitsu.jpeg",
        tags: ["Supermarket", "Food Court", "Japanese"],
      },
    ],
  },
  adventure5: {
    name: "Art & Culture Downtown LA",
    route: [
      [34.0689, -118.4452],
      [34.0522, -118.2437],  // Los Angeles City Hall (Start)
      [34.0521, -118.2427],  // The Broad Museum
      [34.0487, -118.2500],  // Museum of Contemporary Art (MOCA)
      [34.0407, -118.2559],  // Grand Central Market
      [34.0392, -118.2547],  // Walt Disney Concert Hall
      [34.0689, -118.4452],
    ],
    stops: [
      {
        id: 1,
        type: "destination",
        name: "Los Angeles City Hall",
        coordinates: [34.0522, -118.2437],
        description: "Iconic building and a symbol of LA's civic pride, offering great views from its observation deck.",
        image: "/places/lach.jpg",
        tags: ["Landmark", "Government", "Architecture"],
      },
      {
        id: 2,
        type: "destination",
        name: "The Broad Museum",
        coordinates: [34.0521, -118.2427],
        description: "A contemporary art museum featuring works by Jeff Koons, Roy Lichtenstein, and more.",
        image: "/places/broad.jpeg",
        tags: ["Art", "Museum", "Contemporary"],
      },
      {
        id: 3,
        type: "destination",
        name: "Museum of Contemporary Art (MOCA)",
        coordinates: [34.0487, -118.2500],
        description: "A leading institution for contemporary art in Los Angeles, featuring a wide range of exhibitions.",
        image: "/places/moca.jpg",
        tags: ["Art", "Museum", "Contemporary"],
      },
      {
        id: 4,
        type: "destination",
        name: "Grand Central Market",
        coordinates: [34.0407, -118.2559],
        description: "DTLA's popular food hall with a variety of delicious meals from local vendors.",
        image: "/places/gcm.jpeg",
        tags: ["Food", "Casual", "Local"],
      },
      {
        id: 5,
        type: "destination",
        name: "Walt Disney Concert Hall",
        coordinates: [34.0392, -118.2547],
        description: "Frank Gehry-designed concert hall, known for its stunning architecture and acoustics.",
        image: "/places/wdch.jpg",
        tags: ["Art", "Music", "Landmark"],
      },
    ],
  },
  adventure6: {
    name: "Tierra Mia Coffee, Pho & The Last Bookstore",
    route: [
      [34.0689, -118.4452],  // UCLA (Start)
      [34.0615, -118.2520],  // Tierra Mia Coffee (Westwood)
      [34.0456, -118.2672],  // Pho 79 (Koreatown)
      [34.0423, -118.2487],  // The Last Bookstore
      [34.0689, -118.4452],  // UCLA (End)
    ],
    stops: [
      {
        id: 1,
        type: "restaurant",
        name: "Tierra Mia Coffee",
        coordinates: [34.0615, -118.2520],
        description: "Latin-inspired coffee chain known for its rich, flavorful coffee drinks.",
        image: "/places/horchata.jpeg",
        tags: ["Coffee", "Latino-Owned", "Casual"],
      },
      {
        id: 2,
        type: "restaurant",
        name: "Pho 79",
        coordinates: [34.0456, -118.2672],
        description: "Casual spot serving pho and other Vietnamese favorites in Koreatown.",
        image: "/places/pho.jpg",
        tags: ["Pho", "Vietnamese", "Casual"],
      },
      {
        id: 3,
        type: "destination",
        name: "The Last Bookstore",
        coordinates: [34.0423, -118.2487],
        description: "Whimsical and artistic bookstore known for its unique layout and selection of books.",
        image: "/places/tlbs.jpeg",
        tags: ["Books", "Unique", "Arts"],
      },
    ],
  },

};
