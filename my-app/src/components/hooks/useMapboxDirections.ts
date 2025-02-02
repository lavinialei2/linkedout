import { useState, useEffect } from "react"

interface RoutePoint {
  0: number
  1: number
}

export function useMapboxDirections(waypoints: RoutePoint[]) {
  const [route, setRoute] = useState<[number, number][]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (waypoints.length < 2) return

    const fetchRoute = async () => {
      setIsLoading(true)
      setError(null)

      const coordinates = waypoints.map((point) => `${point[1]},${point[0]}`).join(";")
      const url = `https://api.mapbox.com/directions/v5/mapbox/walking/${coordinates}?geometries=geojson&access_token=pk.eyJ1IjoibGF2aW5pYWxlaSIsImEiOiJjbTZvNXdmdzQxMGlzMmlvcWkwcnE3YWtpIn0.zj-uE5Sn_JUS0gHZtZNO8w`

      try {
        console.log("Fetching route from Mapbox API:", url)
        const response = await fetch(url)
        const data = await response.json()

        if (data.routes && data.routes.length > 0) {
          const routeCoordinates = data.routes[0].geometry.coordinates.map(
            ([lng, lat]: [number, number]) => [lat, lng] as [number, number],
          )
          console.log("Route fetched successfully:", routeCoordinates)
          setRoute(routeCoordinates)
        } else {
          console.error("No route found in Mapbox response:", data)
          setError("No route found")
        }
      } catch (err) {
        console.error("Failed to fetch route:", err)
        setError("Failed to fetch route")
      } finally {
        setIsLoading(false)
      }
    }

    fetchRoute()
  }, [waypoints])

  return { route, isLoading, error }
}

