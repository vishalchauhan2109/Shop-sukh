import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { shops } from '../Services/Shop'; 

const containerStyle = {
  width: '100%',
  height: '500px'
};

const defaultCenter = {
  lat: 28.4312,
  lng: 77.3197
};

function MapComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [userPosition, setUserPosition] = useState(defaultCenter);
  const [activeShop, setActiveShop] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        () => {
          console.warn("Geolocation permission denied or error");
        }
      );
    } else {
      console.warn("Browser doesn't support Geolocation");
    }
  }, []);

  const onLoad = useCallback( ()=> {
    // optional: map instance save kar sakte hain agar zaroorat ho
  }, []);

  if (loadError) {
    return <div className="text-red-500 text-center my-4">Error loading map</div>;
  }
  if (!isLoaded) {
    return <div className="text-gray-500 text-center my-4">Loading map…</div>;
  }

  return (
    <div className="map-wrapper rounded-2xl">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userPosition}
        zoom={14}
        onLoad={onLoad}
      >
        {/* User marker */}
        <Marker
          position={userPosition}
          title="You are here"
          icon={{
            url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          }}
        />

        {/* Shop markers */}
        {shops.map(shop => (
          <Marker
            key={shop.id}
            position={{ lat: shop.lat, lng: shop.lng }}
            title={shop.name}
            onClick={() => setActiveShop(shop)}
          />
        ))}

        {/* InfoWindow for active shop */}
        {activeShop && (
          <InfoWindow
            position={{ lat: activeShop.lat, lng: activeShop.lng }}
            onCloseClick={() => setActiveShop(null)}
          >
            <div className="p-2">
              <h2 className="text-lg font-bold">{activeShop.name}</h2>
              <p className="text-sm text-gray-700">{activeShop.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default React.memo(MapComponent);
