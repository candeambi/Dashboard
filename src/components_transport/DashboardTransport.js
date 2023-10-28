import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import DataTransport from './DataTransport.json';

function DashboardTransport () {

  const [selectedRoute, setSelectedRoute] = useState(null); // Estado para la línea seleccionada


    // Función para crear marcadores a partir de los datos del JSON
  const createMarkers = (data) => {
    let filteredData = data;
    if (selectedRoute) {
      filteredData = data.filter((DataTransport) => DataTransport.route_id === selectedRoute);
    }
    return filteredData.map((DataTransport) => (
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
      <select value={selectedRoute} onChange={(e) => setSelectedRoute(e.target.value || null)}>
        <option value="">Selecciona una línea de colectivo</option>
        {DataTransport.map((DataTransport) => (
          <option key={DataTransport.route_id} value={DataTransport.route_id}>
            {DataTransport.route_short_name}
          </option>
        ))}
      </select>

    <MapContainer center={[-34.60376,  -58.38162]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {selectedRoute && createMarkers(DataTransport)}
    </MapContainer>
    </div>
  );
}

export default DashboardTransport;