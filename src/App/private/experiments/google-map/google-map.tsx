import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useInitGoogleMapScript from "./use-init-goole-map-script";
import Markers from "./markers";

const Root = styled.div`
  width: 100%;
  height: 100%;
`;
const Map = styled.div`
  width: 500px;
  height: 500px;
`;

const GoogleMap = () => {
  const googleMapBoundariesRef = useRef<HTMLDivElement | null>(null);
  const googleMap = useRef<google.maps.Map<HTMLDivElement> | null>(null);
  const [mapReady, setMapReady] = useState<boolean>(false);

  const intGoogleMap = useCallback(() => {
    const googleMapBoundaries = googleMapBoundariesRef?.current;

    if (!googleMapBoundaries) return;

    googleMap.current = new window.google.maps.Map(googleMapBoundaries, {
      zoom: 16,
      center: { lat: -34.397, lng: 150.644 },
      disableDefaultUI: true,
    });

    setMapReady(true);
  }, []);

  useInitGoogleMapScript(intGoogleMap);

  return (
    <Root>
      <Map ref={googleMapBoundariesRef} />
      {mapReady && googleMap.current && (
        <Markers googleMap={googleMap.current} />
      )}
    </Root>
  );
};

export default GoogleMap;
