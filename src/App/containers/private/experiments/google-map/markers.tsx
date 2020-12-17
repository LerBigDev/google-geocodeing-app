import React, { useCallback, useState } from "react";
import styled from "styled-components";
import useGeocode from "./use-geocode";

type TMarkers = {
  googleMap: google.maps.Map<HTMLDivElement>;
};

const Root = styled.div``;

const Markers: React.FC<TMarkers> = ({ googleMap }) => {
  const [addresses, setAddresses] = useState<google.maps.GeocoderResult[]>();
  const [curAddressSelect, setCurAddressSelect] = useState<number>();
  const [marker, setMarker] = useState<google.maps.Marker>();

  const handleGeocoderCb = useCallback(
    (results: google.maps.GeocoderResult[]) => {
      console.log(results);
      setAddresses(results);
    },
    []
  );

  const handleOnSetMarkerCb = useCallback(
    (curAddressSelect?: number) => {
      if (!addresses) {
        console.error("Addresses not settled");
        return;
      }

      if (!curAddressSelect) {
        console.error("Address for marker not selected");
        return;
      }

      /** Remove prev. marker from the map */
      marker?.setMap(null);

      /** Set new marker */
      const newMarker = new google.maps.Marker({
        position: addresses[curAddressSelect].geometry.location,
        title: "Hello World!",
        draggable: true,
      });
      newMarker.setMap(googleMap);
      setMarker(newMarker);

      /** Center map */
      googleMap.setCenter(addresses[curAddressSelect].geometry.location);
    },
    [addresses, googleMap, marker]
  );

  useGeocode(googleMap, handleGeocoderCb);

  return (
    <Root>
      {addresses && (
        <>
          <p>Select address</p>
          <select
            onChange={(e) => {
              const value: number = (e?.target?.value as unknown) as number;
              if (!value) {
                console.error("No address for select");
                return;
              }
              setCurAddressSelect(value);
            }}
          >
            {addresses.map((addr, index) => {
              return (
                <option key={addr.place_id} value={index}>
                  {addr.formatted_address}
                </option>
              );
            })}
          </select>
          <button onClick={() => handleOnSetMarkerCb(curAddressSelect)}>
            Set address
          </button>
        </>
      )}
    </Root>
  );
};

export default Markers;
