export const adventures = {
  adventure1: {
    name: "Things to do after seeing someone off at LAX",
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
        name: "Plane watching at LAX",
        coordinates: [33.9425, -118.4083],
        description: "I like planes.",
        image: "/places/lax.jpg",
        tags: ["Planes", "Observation", "Outdoor", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 2,
        type: "restaurant",
        name: "Lalibela",
        coordinates: [34.0617, -118.2784],
        description: "Cozy restaurant in Little Ethiopia. Great injera!",
        image: "/places/lalibela.jpeg",
        tags: ["Ethiopian", "Dinner", "Casual", "BIPOC-Owned", "Latinx-Owned", "Inclusive", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 3,
        type: "destination",
        name: "Urban Lights Installation (LACMA)",
        coordinates: [34.0620, -118.2478],
        description: "Where I bring people who come visit me when I haven't seen them in a long time.",
        image: "/places/ulights.jpeg",
        tags: ["Art", "Outdoor", "Landmark", "Cultural", "Wheelchair-Accessible", "Inclusive", "Photography"],
        comments: [],
        rating: 4,
      },
    ],
    routes: [],
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
        type: "destination",
        name: "Mandarin Noodle House",
        coordinates: [34.0603, -118.1437],
        description: "It's been 489 days since I've had this noodle soup, and I miss it. Cash-only establishment.",
        image: "/places/mnh.jpeg",
        tags: ["Noodles", "Casual", "Local", "Asian-Owned", "BIPOC-Owned", "Wheelchair-Accessible", "Small business"],
        comments: ["So delicious! Great place to meet up with an old friend.", "Paid respects with the owner today in remembrance of those we lost in the MPK shooting.", "I've been coming here since 2005! Delicious food and lovely owner.", "The toucan has my wife, send heLJLKDAS"],
        rating: 4.0,
      },
      {
        id: 2,
        type: "destination",
        name: "Kee Wah Bakery",
        coordinates: [34.0601, -118.1428],
        description: "Traditional Chinese bakery serving tasty pastries and buns. I got a lil fruit tart.",
        image: "/places/keewah.jpg",
        tags: ["Bakery", "Asian-Owned", "Snacks", "BIPOC-Owned", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 3,
        type: "destination",
        name: "Sierra Vista Park",
        coordinates: [34.0945, -118.1425],
        description: "A local park perfect for a short break during the crawl. You can sit on a rock and ponder.",
        image: "/places/sierravista.jpeg",
        tags: ["Park", "Outdoor", "Relaxing", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 4,
        type: "destination",
        name: "Ten Ren Tea",
        coordinates: [34.0962, -118.1287],
        description: "Walked an hour to get here, but the MP to Alhambra neighborhoods were such a delight to walk around in again after ten years.",
        image: "/places/tenren.jpeg",
        tags: ["Tea", "Bubble Tea", "Casual", "Asian-Owned", "BIPOC-Owned", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 5,
        type: "destination",
        name: "Almansor Park",
        coordinates: [34.0869, -118.1300],
        description: "A peaceful park with a lake, perfect for a relaxing stroll before heading back home.",
        image: "/places/almansor.jpg",
        tags: ["Park", "Nature", "Outdoor", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
    ],
    routes: ["Big Blue Bus R12", "Metro E Line", "Metro 761"],
  },

  // 3. SGV Cultural & Food Tour
  adventure3: {
    name: "Long walks through unfamiliar neighborhoods",
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
        type: "destination",
        name: "Chao Wei Ju",
        coordinates: [34.0971, -118.1060],
        description: "Came here at the recommendation of someone I no longer remember from a year ago. Good.",
        image: "/places/cwj.jpeg",
        tags: ["Chinese", "Restaurant", "Casual", "BIPOC-Owned", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 2,
        type: "destination",
        name: "Historic San Gabriel",
        coordinates: [34.0965, -118.1054],
        description: "Historical sites and architecture of San Gabriel. Very vibes.",
        image: "/places/sangab.jpeg",
        tags: ["History", "Cultural", "Outdoor", "Landmark", "Inclusive"],
        comments: [],
        rating: 4,
      },
      {
        id: 3,
        type: "destination",
        name: "Huntington Library & Gardens",
        coordinates: [34.1254, -118.1253],
        description: "Very pretty but also expensive to enter (though there are free days). But worth it to go just to sit outside in the free part of the gardens and read a book.",
        image: "/places/huntington.jpg",
        tags: ["Museum", "Art", "Nature", "Historic", "Cultural", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
    ],
    routes: [],
  },

  // 4. Venice Creamery, Beach & Mitsuwa Marketplace
  adventure4: {
    name: "Ice cream and the beach!",
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
        type: "destination",
        name: "Wanderlust Creamery",
        coordinates: [33.9982, -118.4719],
        description: "I love vietnamese rocky road! Went very well with the passionfruit cacao!",
        image: "/places/icecream.jpeg",
        tags: ["Ice Cream", "Dessert", "Trendy", "Wheelchair-Accessible", "Inclusive"],
        comments: [],
        rating: 4,
      },
      {
        id: 2,
        type: "destination",
        name: "Venice Beach",
        coordinates: [33.99, -118.478],
        description: "Lively beach with a boardwalk, street performers, and unique culture. So many sand pipers. So lovely.",
        image: "/places/venice.jpeg",
        tags: ["Beach", "Casual", "Street Performers", "Outdoor", "Inclusive", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 3,
        type: "destination",
        name: "Mitsuwa Marketplace",
        coordinates: [33.9989, -118.4792],
        description: "Ramen here hits.",
        image: "/places/mitsu.jpeg",
        tags: ["Supermarket", "Food Court", "Japanese", "Wheelchair-Accessible", "Inclusive"],
        comments: [],
        rating: 4,
      },
    ],
    routes: [],
  },
  adventure5: {
    name: "Cool museums and other places in downtown LA",
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
        description: "Iconic building and a symbol of LA's civic pride, offering great views from its observation deck. Cool building to see at some point.",
        image: "/places/lach.jpg",
        tags: ["Landmark", "Government", "Architecture", "Historic", "Inclusive", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 2,
        type: "destination",
        name: "The Broad Museum",
        coordinates: [34.0521, -118.2427],
        description: "A contemporary art museum featuring works by Jeff Koons, Roy Lichtenstein, Barabara Kruger, and more. The tunnel-like escalator is really cool.",
        image: "/places/broad.jpeg",
        tags: ["Art", "Museum", "Contemporary", "Inclusive", "Wheelchair-Accessible", "BIPOC-Friendly"],
        comments: [],
        rating: 4,
      },
      {
        id: 3,
        type: "destination",
        name: "Museum of Contemporary Art (MOCA)",
        coordinates: [34.0487, -118.2500],
        description: "I liked the exhibit that was a bunch of photos of shoes. There were a bunch of ducks too. And I saw a painting I only ever remember seeing as a screensaver a long time ago.",
        image: "/places/moca.jpg",
        tags: ["Art", "Museum", "Contemporary", "Inclusive", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 4,
        type: "destination",
        name: "Grand Central Market",
        coordinates: [34.0407, -118.2559],
        description: "DTLA's popular food hall with a variety of delicious meals from local vendors.",
        image: "/places/gcm.jpeg",
        tags: ["Food", "Casual", "Local", "BIPOC-Owned", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
      {
        id: 5,
        type: "destination",
        name: "Walt Disney Concert Hall",
        coordinates: [34.0392, -118.2547],
        description: "Frank Gehry-designed concert hall, known for its stunning architecture and acoustics. There's a little outdoor upstairs garden that's a good place to eat lunch if you pack one.",
        image: "/places/wdch.jpg",
        tags: ["Art", "Music", "Landmark", "Wheelchair-Accessible", "Inclusive"],
        comments: [],
        rating: 4,
      },
    ],
    routes: [],
  },
  adventure6: {
    name: "Cozy coffee and books",
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
        type: "destination",
        name: "Tierra Mia Coffee",
        coordinates: [34.0615, -118.2520],
        description: "Latin-inspired coffee chain known for its rich, flavorful coffee drinks. Horchata frappe is the best (I need to try more flavors though)!",
        image: "/places/horchata.jpeg",
        tags: ["Coffee", "Latino-Owned", "Casual", "Latinx-Owned", "Wheelchair-Accessible", "Inclusive"],
        comments: [],
        rating: 4,
      },
      {
        id: 2,
        type: "destination",
        name: "Pho 79",
        coordinates: [34.0456, -118.2672],
        description: "Pho always hits. But in general, hooray food in Koreatown.",
        image: "/places/pho.jpg",
        tags: ["Pho", "Vietnamese", "Casual", "Wheelchair-Accessible", "Inclusive"],
        comments: [],
        rating: 4,
      },
      {
        id: 3,
        type: "destination",
        name: "The Last Bookstore",
        coordinates: [34.0423, -118.2487],
        description: "Whimsy! I love whimsy.",
        image: "/places/tlbs.jpeg",
        tags: ["Books", "Unique", "Arts", "Inclusive", "Wheelchair-Accessible"],
        comments: [],
        rating: 4,
      },
    ],
    routes: [],
  },

};
