import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from "styled-components";

/* Estilos */
const ContainerMenu = styled.div`
  background: #27bb65;
`

const Title = styled.h3`
  color: white;
  padding: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`

const Menu = styled.select`
  margin: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`

function DashboardTransport ({transportData, selectedRoute, setSelectedRoute}) {

  const routeShortNameToRouteId = {
    "321A a Libertad": "1466",
    "253A a Libertad": "1465",
    "153A a Bº Nuevo": "1468",
    "7A a Barrio Policial": "2",
    "159A a Pza Constitución - IDA": "1702",
    "7B a Bº Samore": "1608",
    "148H F x Monteverde": "1646",
    "148H a Constitución": "1647",
    "159E 2 hacia Berazategui": "1695",
    "152A a Olivos": "99",
    "148B a Constitución": "1635",
    "300B1 a Morón": "993",
    "159C L (Roja) Correo Central": "839",
    "7A Toma Nueva": "1",
    "159D 1 hacia C Central": "1494",
  };
  

    // Función para crear marcadores a partir de los datos del JSON
  const createMarkers = (data) => {
    let filteredData = data;
    if (selectedRoute) {
      filteredData = data.filter((transportData) => transportData.route_id === selectedRoute);
    }
    return filteredData.map((transportData) => (
      <Marker
        key={transportData.id}
        position={[transportData.latitude, transportData.longitude]}
      >
        <Popup>
          <strong>Linea:</strong> {transportData.route_short_name}<br />
          <strong>Empresa:</strong> {transportData.agency_name}<br />
          <strong>Velocidad:</strong> {transportData.speed} km/h<br />
          <strong>Destino:</strong> {transportData.trip_headsign}
        </Popup>
      </Marker>
    ));
  };

  return (
    <ContainerMenu>
      <Title>Colectivos de la Ciudad de Buenos Aires</Title>
      <Menu value={selectedRoute} onChange={(e) => setSelectedRoute(e.target.value)}>
        <option value="">Selecciona una línea de colectivo</option>
        {Object.keys(routeShortNameToRouteId).map((routeShortName) => (
          <option key={routeShortNameToRouteId[routeShortName]} value={routeShortNameToRouteId[routeShortName]}>
            {routeShortName}
          </option>
        ))}
      </Menu>


    <MapContainer center={[-34.60376,  -58.38162]} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {selectedRoute && createMarkers(transportData)}
    </MapContainer>
    </ContainerMenu>
  );
}

export default DashboardTransport;