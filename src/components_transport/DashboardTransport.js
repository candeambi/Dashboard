import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
//import LineSelector from './LineSelector';
import DataTransport from './DataTransport.json';

function DashboardTransport () {

    // Función para crear marcadores a partir de los datos del JSON
  const createMarkers = (data) => {
    return data.map((DataTransport) => (
      <Marker
        key={DataTransport.id}
        position={[DataTransport.latitude, DataTransport.longitude]}
      >
        <Popup>
          <strong>Colectivo:</strong> {DataTransport.route_short_name}<br />
          <strong>Velocidad:</strong> {DataTransport.speed} km/h<br />
          <strong>Destino:</strong> {DataTransport.trip_headsign}
        </Popup>
      </Marker>
    ));
  };

  return (
    <div>
    <MapContainer center={[-34.60376,  -58.38162]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {createMarkers(DataTransport)}
    </MapContainer>
    </div>
  );
}

export default DashboardTransport;