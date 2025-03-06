"use client";

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// You'll need to replace this with your own Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

if (!mapboxgl.accessToken) {
  console.error('Mapbox token is missing. Please add NEXT_PUBLIC_MAPBOX_TOKEN to your environment variables.');
}

const studentAreas = [
  {
    name: 'Masonville',
    coordinates: [-81.275, 43.015] as [number, number],
    description: 'Popular student area near Masonville Mall with multiple bus routes',
    busRoutes: ['106', '27']
  },
  {
    name: 'Old North',
    coordinates: [-81.265, 43.005] as [number, number],
    description: 'Close to campus, popular for walking and bus routes',
    busRoutes: ['106', '27']
  },
  {
    name: 'Downtown',
    coordinates: [-81.245, 42.985] as [number, number],
    description: 'Vibrant area with many amenities and bus connections',
    busRoutes: ['106', '27', '13']
  },
  {
    name: 'Oxford/Wharncliffe',
    coordinates: [-81.255, 42.995] as [number, number],
    description: 'South-side student area with good bus access',
    busRoutes: ['106', '27']
  },
  {
    name: 'West of Campus',
    coordinates: [-81.285, 43.005] as [number, number],
    description: 'Sarnia and Wonderland area with multiple bus routes',
    busRoutes: ['106', '27']
  }
];

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-81.265, 43.005], // London, ON coordinates
      zoom: 13
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for student areas
    studentAreas.forEach(area => {
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <h3 class="font-medium text-lg mb-2">${area.name}</h3>
          <p class="text-sm text-zinc-600 mb-2">${area.description}</p>
          <div class="text-sm">
            <span class="font-medium">Bus Routes:</span> ${area.busRoutes.join(', ')}
          </div>
        `);

      new mapboxgl.Marker()
        .setLngLat(area.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
