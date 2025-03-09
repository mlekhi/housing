"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const studentAreas = [
    {
        name: 'Masonville',
        coordinates: [-81.275, 43.015] as [number, number],
        description: 'Popular student area near Masonville Mall with multiple bus routes',
        busRoutes: ['106', '27'],
        color: '#d7b5ff', // Light purple for Masonville
        boundary: [
          [-81.2747377, 43.0289096],
          [-81.2996929, 43.0216467],
          [-81.30495, 43.0200936],
          [-81.3043358, 43.0186971],
          [-81.3062456, 43.0157006],
          [-81.2990358, 43.0127509],
          [-81.2991431, 43.010366],
          [-81.2921908, 43.0094089],
          [-81.2938001, 43.0076201],
          [-81.2907102, 43.0052193],
          [-81.2894013, 43.0062079],
          [-81.2904098, 43.0076358],
          [-81.2876632, 43.0091892],
          [-81.2868049, 43.0100365],
          [-81.2828567, 43.0082164],
          [-81.2800028, 43.0135982],
          [-81.2731578, 43.0146337],
          [-81.2718704, 43.0126411],
          [-81.2688234, 43.0122959],
          [-81.2681153, 43.0148847],
          [-81.265476, 43.0159987],
          [-81.2624719, 43.0138806],
          [-81.2535026, 43.013457],
          [-81.2550046, 43.017191],
          [-81.2522581, 43.0194658],
          [-81.2522366, 43.0223053],
          [-81.2572577, 43.0207679],
          [-81.2585451, 43.0244074],
          [-81.2710765, 43.0239527],
          [-81.2747377, 43.0289096] // Closing the polygon
        ]
      },      
  {
    name: 'Old North',
    coordinates: [-81.265, 43.005] as [number, number],
    description: 'Close to campus, popular for walking and bus routes',
    busRoutes: ['106', '27'],
    color: '#d7b5ff', // Light purple for Old North
    boundary: [
        [-81.2688234, 43.0122959],
        [-81.2670074, 43.0098373],
        [-81.2688957, 43.005381],
        [-81.2718998, 43.0025564],
        [-81.2714706, 42.9989784],
        [-81.2612568, 42.9976602],
        [-81.2612568, 42.9928891],
        [-81.2369667, 43.0001084],
        [-81.2457214, 43.0170546],
        [-81.2535026, 43.013457],
        [-81.2624719, 43.0138806],
        [-81.265476, 43.0159987],
        [-81.2681153, 43.0148847],
        [-81.2688234, 43.0122959] // Closing the polygon
      ]
      },
  {
    name: 'Downtown',
    coordinates: [-81.245, 42.985] as [number, number],
    description: 'Vibrant area with many amenities and bus connections',
    busRoutes: ['106', '27', '13'],
    color: '#d7b5ff', // Light purple for Downtown
    boundary: [
        [-81.2369667, 43.0001084],
        [-81.2612568, 42.9928891],
        [-81.2587065, 42.9903574],
        [-81.2572474, 42.9892901],
        [-81.2582774, 42.9863392],
        [-81.2565607, 42.9826975],
        [-81.2570757, 42.9807509],
        [-81.2554449, 42.9781764],
        [-81.2551016, 42.9762297],
        [-81.2510676, 42.9769833],
        [-81.2478918, 42.9743458],
        [-81.2451453, 42.9761041],
        [-81.2441153, 42.9735922],
        [-81.2419695, 42.972399],
        [-81.2398238, 42.9742202],
        [-81.2353606, 42.9748482],
        [-81.2333006, 42.9734038],
        [-81.2308974, 42.9743458],
        [-81.2256939, 42.975068],
        [-81.2369667, 43.0001084] // Closing the polygon
        ]
  },
  {
    name: 'Oxford/Wharncliffe',
    coordinates: [-81.255, 42.995] as [number, number],
    description: 'South-side student area with good bus access',
    busRoutes: ['106', '27'],
    color: '#d7b5ff', // Light purple for Oxford/Wharncliffe
    boundary: [
        [-81.2718998, 43.0025564],
        [-81.2766605, 43.0018687],
        [-81.2759739, 42.9970352],
        [-81.2714248, 42.9898156],
        [-81.275888, 42.9887482],
        [-81.2742572, 42.9823439],
        [-81.2674766, 42.9830974],
        [-81.256662, 42.9822811],
        [-81.2582774, 42.9863392],
        [-81.2572474, 42.9892901],
        [-81.2612568, 42.9928891],
        [-81.2612568, 42.9976602],
        [-81.2714706, 42.9989784],
        [-81.2718998, 43.0025564] // Closing the polygon
        ]
  },
  {
    name: 'West of Campus',
    coordinates: [-81.285, 43.005] as [number, number],
    description: 'Sarnia and Wonderland area with multiple bus routes',
    busRoutes: ['106', '27'],
    color: '#d7b5ff', // Light purple for West of Campus
    boundary: [
        [-81.3047334, 43.0075252],
        [-81.2938329, 42.9861186],
        [-81.2714248, 42.9898156],
        [-81.2759739, 42.9970352],
        [-81.2766605, 43.0018687],
        [-81.2776109, 43.0111027],
        [-81.2764951, 43.0141151],
        [-81.2800028, 43.0135982],
        [-81.2828567, 43.0082164],
        [-81.2868049, 43.0100365],
        [-81.2876632, 43.0091892],
        [-81.2904098, 43.0076358],
        [-81.2894013, 43.0062079],
        [-81.2907102, 43.0052193],
        [-81.2938001, 43.0076201],
        [-81.2921908, 43.0094089],
        [-81.2953778, 43.009973],
        [-81.3047334, 43.0075252] // Closing the polygon
        ]
  }
];

const busRoutes = [
    {
      id: '106',
      name: 'Richmond',
      color: '#3b82f6', // blue
      coordinates: [
        [-81.25036899999998, 42.985043000000076],
        [-81.24991899999998, 42.98512800000003],
        [-81.24822399999994, 42.98559800000004],
        [-81.24593099999998, 42.98624600000005],
        [-81.24527799999998, 42.98497100000003],
        [-81.24468199999995, 42.98376600000006],
        [-81.24696999999998, 42.983141000000046],
        [-81.24910699999998, 42.98255800000004],
        [-81.25036899999998, 42.985043000000076]
      ]
    },
    {
      id: '102',
      name: 'Highbury',
      color: '#10b981', // green
      coordinates: [
        [-81.25036899999998, 42.985043000000076],
        [-81.25057399999997, 42.98551700000007],
        [-81.25070699999998, 42.98664700000006],
        [-81.25072499999999, 42.98739900000004],
        [-81.25074099999995, 42.98804000000007],
        [-81.25075299999997, 42.98858100000007],
        [-81.25076399999995, 42.98926000000006],
        [-81.25077499999998, 42.989892000000054]
      ]
    },
    {
      id: '2',
      name: 'Wellington',
      color: '#f59e0b', // amber
      coordinates: [
        [-81.24593099999998, 42.98624600000005],
        [-81.24527799999998, 42.98497100000003],
        [-81.24468199999995, 42.98376600000006],
        [-81.24696999999998, 42.983141000000046],
        [-81.24910699999998, 42.98255800000004]
      ]
    },
    {
      id: '93',
      name: 'Wharncliffe',
      color: '#8b5cf6', // purple
      coordinates: [
        [-81.25036899999998, 42.985043000000076],
        [-81.25028999999995, 42.98485900000003],
        [-81.25003499999997, 42.984365000000025],
        [-81.24970799999994, 42.98375100000004],
        [-81.24910699999998, 42.98255800000004]
      ]
    },
    {
      id: '94',
      name: 'Wonderland',
      color: '#ef4444', // red
      coordinates: [
        [-81.25036899999998, 42.985043000000076],
        [-81.25057399999997, 42.98551700000007],
        [-81.25070699999998, 42.98664700000006],
        [-81.25072699999998, 42.98688100000004]
      ]
    },
    {
      id: '33',
      name: 'Oxford',
      color: '#06b6d4', // cyan
      coordinates: [
        [-81.25076399999995, 42.98926000000006],
        [-81.25077499999998, 42.989892000000054],
        [-81.25076799999994, 42.99046000000004],
        [-81.25076799999994, 42.99054000000007]
      ]
    },
    {
      id: '91',
      name: 'Fanshawe',
      color: '#84cc16', // lime
      coordinates: [
        [-81.24593099999998, 42.98624600000005],
        [-81.24527799999998, 42.98497100000003],
        [-81.24468199999995, 42.98376600000006],
        [-81.24696999999998, 42.983141000000046]
      ]
    },
    {
      id: '10',
      name: 'Huron',
      color: '#f97316', // orange
      coordinates: [
        [-81.24970799999994, 42.98375100000004],
        [-81.24910699999998, 42.98255800000004],
        [-81.25036899999998, 42.985043000000076],
        [-81.25057399999997, 42.98551700000007]
      ]
    },
    {
      id: '27',
      name: 'Fanshawe',
      color: '#a855f7', // violet
      coordinates: [
        [-81.25070699999998, 42.98664700000006],
        [-81.25072699999998, 42.98688100000004],
        [-81.25072499999999, 42.98739900000004]
      ]
    },
    {
      id: '13',
      name: 'Dundas',
      color: '#ec4899', // pink
      coordinates: [
        [-81.25074099999995, 42.98804000000007],
        [-81.25075299999997, 42.98858100000007],
        [-81.25076399999995, 42.98926000000006]
      ]
    },
    {
      id: '34',
      name: 'Sarnia',
      color: '#14b8a6', // teal
      coordinates: [
        [-81.25077499999998, 42.989892000000054],
        [-81.25076799999994, 42.99046000000004],
        [-81.25076799999994, 42.99054000000007]
      ]
    }
  ];

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [visibleRoutes, setVisibleRoutes] = useState<string[]>(busRoutes.map(route => route.id));
  const [hoveredArea, setHoveredArea] = useState<typeof studentAreas[0] | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-81.265, 43.005],
      zoom: 12,
    });

    map.current.on("load", () => {
      console.log("Map loaded.");

      // Add student areas source
      map.current?.addSource("student-areas", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: studentAreas.map(area => ({
            type: "Feature",
            geometry: { type: "Polygon", coordinates: [area.boundary] },
            properties: { name: area.name, description: area.description, color: area.color },
          })),
        },
      });

      // Add student areas fill layer
      map.current?.addLayer({
        id: "student-area-fill",
        type: "fill",
        source: "student-areas",
        paint: {
          "fill-color": ["get", "color"],
          "fill-opacity": 0.2,
          "fill-outline-color": ["get", "color"],
        },
      });

      // Add student area outlines
      map.current?.addLayer({
        id: "student-area-outline",
        type: "line",
        source: "student-areas",
        paint: {
          "line-color": ["get", "color"],
          "line-width": 2,
        },
      });

      console.log("Student areas added.");

      // Add bus routes source
      map.current?.addSource("bus-routes", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: busRoutes.map(route => ({
            type: "Feature",
            geometry: { type: "LineString", coordinates: route.coordinates },
            properties: { id: route.id, name: route.name, color: route.color },
          })),
        },
      });

      // Add bus routes layer
      map.current?.addLayer({
        id: "bus-routes",
        type: "line",
        source: "bus-routes",
        paint: {
          "line-color": ["get", "color"],
          "line-width": 3,
          "line-opacity": 0.8,
        },
        filter: ["in", "id", ...visibleRoutes],
      });

      console.log("Bus routes added.");

      // Hover interactions
      map.current?.on("mousemove", "student-area-fill", (e) => {
        if (!e.features || e.features.length === 0) return; // Ensure features exist
      
        const area = studentAreas.find(a => a.name === e.features[0].properties?.name);
        if (area) setHoveredArea(area);
      });
                  
      map.current?.on("mouseleave", "student-area-fill", () => setHoveredArea(null));

      map.current?.on("mouseenter", "student-area-fill", () => {
        if (map.current) map.current.getCanvas().style.cursor = "pointer";
      });

      map.current?.on("mouseleave", "student-area-fill", () => {
        if (map.current) map.current.getCanvas().style.cursor = "";
      });
    });

    return () => map.current?.remove();
  }, []);

  // Toggle bus route visibility
  const toggleRoute = (routeId: string) => {
    setVisibleRoutes(prev =>
      prev.includes(routeId) ? prev.filter(id => id !== routeId) : [...prev, routeId]
    );
  };

  // Update route visibility
  useEffect(() => {
    if (map.current?.isStyleLoaded()) {
      console.log("Updating bus routes filter:", visibleRoutes);
      map.current.setFilter("bus-routes", ["in", ["get", "id"], ["literal", visibleRoutes]]);
    }
  }, [visibleRoutes]);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Map Container */}
      <div className="w-full h-[450px] relative">
        <div ref={mapContainer} className="w-full h-full" />
  
        {/* Hover Info Box */}
        {hoveredArea && (
          <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg">
            <h3 className="font-medium text-base">{hoveredArea.name}</h3>
            <p className="text-sm text-gray-600">{hoveredArea.description}</p>
          </div>
        )}
      </div>
  
      {/* Bus Route Toggles */}
      <div className="bg-white p-4 rounded-lg shadow-lg w-full md:w-[260px] order-last md:order-none">
        <h3 className="font-medium text-sm mb-3">Bus Routes</h3>
        <div className="space-y-2">
          {busRoutes.map(route => (
            <button
              key={route.id}
              onClick={() => toggleRoute(route.id)}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-md transition ${
                visibleRoutes.includes(route.id)
                  ? "bg-opacity-10"
                  : "opacity-50 hover:opacity-75"
              }`}
              style={{ backgroundColor: `${route.color}20` }} // Light background matching route color
            >
              {/* Colored Dot */}
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: route.color }} />
              {/* Route Name */}
              <span className="font-medium text-sm text-gray-800">{route.id} - {route.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
