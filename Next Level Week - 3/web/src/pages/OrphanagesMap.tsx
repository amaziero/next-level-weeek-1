import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from '../utils/mapIcon';

function OrphanegesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Map Marker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estaram esperando a sua visita</p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>
          <p>Santa catarina</p>
        </footer>
      </aside>

      <Map
        center={[-23.194049, -47.2666759]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker icon={mapIcon} position={[-23.194049, -47.2666759]}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das Meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanegesMap;
