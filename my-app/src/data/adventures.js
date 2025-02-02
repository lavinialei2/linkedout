export const adventures = {
    adventure1: {
      name: "Adventure 1",
      route: [
        [34.0522, -118.2437], 
        [34.0622, -118.2537], 
        [34.0722, -118.2637], 
      ],
      stops: [
        { id: 1, type: "destination", name: "Stop 1", coordinates: [34.0622, -118.2537] },
        { id: 2, type: "restaurant", name: "Stop 2", coordinates: [34.0722, -118.2637] },
      ],
    },
    adventure2: {
      name: "Adventure 2",
      route: [
        [34.0522, -118.2437], 
        [34.0422, -118.2337], 
      ],
      stops: [
        { id: 1, type: "route", name: "Stop 1", coordinates: [34.0422, -118.2337] },
      ],
    },
  };