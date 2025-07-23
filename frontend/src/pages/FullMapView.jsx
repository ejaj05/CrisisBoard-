import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon issue in Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


const sampleIncidents = [
  { id: 1, type: 'Fire', location: 'Sector 5', lat: 22.575, lng: 88.3639, icon: '🔥' },
  { id: 2, type: 'Accident', location: 'Salt Lake', lat: 22.579, lng: 88.400, icon: '🚑' },
  { id: 3, type: 'Flood', location: 'Howrah', lat: 22.589, lng: 88.310, icon: '🌊' },
];

export default function FullMapView() {
  return (
    <div className="h-full w-full bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-sky-700">CrisisBoard Map View</h1>
        <button className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700">
          Back to Dashboard
        </button>
      </header>

      {/* Map Section */}
      <main className="h-full w-full z-0">
        <MapContainer
          center={[22.5726, 88.3639]} // Kolkata default
          zoom={12}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {sampleIncidents.map((incident) => (
            <Marker key={incident.id} position={[incident.lat, incident.lng]}>
              <Popup>
                <div>
                  <h3 className="font-bold">{incident.type}</h3>
                  <p>{incident.location}</p>
                  <p className="text-xl">{incident.icon}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </main>
    </div>
  );
}
