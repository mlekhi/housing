"use client";
import { MapContainer, TileLayer, Polygon, Polyline, useMap } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet styles are included

const regions = {
  uwo: {
    name: "Western University",
    bounds: [
      [43.005, -81.285], // Top-left
      [43.005, -81.265], // Top-right
      [43.000, -81.265], // Bottom-right
      [43.000, -81.285], // Bottom-left
    ],
    center: [43.003, -81.275],
  },
  downtown: {
    name: "Downtown London",
    bounds: [
      [42.990, -81.265], // Top-left
      [42.990, -81.245], // Top-right
      [42.980, -81.245], // Bottom-right
      [42.980, -81.265], // Bottom-left
    ],
    center: [42.985, -81.255],
  },
  masonville: {
    name: "Masonville",
    bounds: [
      [43.035, -81.295], // Top-left
      [43.035, -81.275], // Top-right
      [43.025, -81.275], // Bottom-right
      [43.025, -81.295], // Bottom-left
    ],
    center: [43.030, -81.285],
  },
};

const busRoutes = {
  route10: {
    name: "Route 10 (Western → Downtown)",
    region: "uwo",
    path: [
      [43.003, -81.280], 
      [42.995, -81.270], 
      [42.985, -81.260],
    ],
  },
  route9: {
    name: "Route 9 (Western → Masonville)",
    region: "uwo",
    path: [
      [43.003, -81.275], 
      [43.020, -81.280], 
      [43.030, -81.285],
    ],
  },
  route2: {
    name: "Route 2 (Masonville → Downtown)",
    region: "masonville",
    path: [
      [43.030, -81.285], 
      [43.015, -81.275], 
      [42.990, -81.260], 
      [42.985, -81.255], 
    ],
  },
  route34: {
    name: "Route 34 (Masonville → Fanshawe)",
    region: "masonville",
    path: [
      [43.030, -81.285], 
      [43.040, -81.275], 
      [43.050, -81.270],
    ],
  },
  route4: {
    name: "Route 4 (Downtown → Argyle)",
    region: "downtown",
    path: [
      [42.985, -81.255], 
      [42.980, -81.245], 
      [42.970, -81.230],
    ],
  },
  route6: {
    name: "Route 6 (Downtown → Richmond)",
    region: "downtown",
    path: [
      [42.985, -81.255], 
      [42.990, -81.265], 
      [42.995, -81.270],
    ],
  },
};

function RegionZoom({ target }) {
  const map = useMap();
  if (target) map.flyTo(target.center, 14, { duration: 1.5 });
  return null;
}

export default function BusMap() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-50">
        <h2 className="text-lg font-bold">Regions</h2>
        {Object.entries(regions).map(([key, region]) => (
          <button key={key} className="block mt-2 text-blue-500 hover:underline" onClick={() => setSelectedRegion(region)}>
            {region.name}
          </button>
        ))}

        {selectedRegion && (
          <>
            <h2 className="mt-4 text-lg font-bold">Bus Routes</h2>
            {Object.entries(busRoutes)
              .filter(([_, route]) => route.region === selectedRegion.name.toLowerCase())
              .map(([key, route]) => (
                <button
                  key={key}
                  className="block mt-2 text-gray-700 hover:text-red-500"
                  onMouseEnter={() => setSelectedRoute(route)}
                  onMouseLeave={() => setSelectedRoute(null)}
                >
                  {route.name}
                </button>
              ))}
          </>
        )}
      </div>

      {/* Map */}
      <MapContainer center={[43.003, -81.275]} zoom={13} style={{ height: "100vh", width: "75%" }}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

        {Object.entries(regions).map(([key, region]) => (
          <Polygon
            key={key}
            positions={region.bounds}
            pathOptions={{
              color: selectedRegion?.name === region.name ? "#4a90e2" : "#bbb",
              fillColor: selectedRegion?.name === region.name ? "#c0dffd" : "#f3f3f3",
              fillOpacity: 0.5,
            }}
            eventHandlers={{ click: () => setSelectedRegion(region) }}
          />
        ))}
        {selectedRegion && <RegionZoom target={selectedRegion} />}
        {selectedRoute && <Polyline positions={selectedRoute.path} pathOptions={{ color: "#ff7b72", weight: 3 }} />}
      </MapContainer>
    </div>
  );
}
