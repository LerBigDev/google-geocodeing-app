import { useEffect } from "react";

const geocoderCb = (
  googleMap: google.maps.Map<HTMLDivElement>,
  cbFunc?: (arg0: google.maps.GeocoderResult[]) => void
) => (e: any) => {
  const geoCoder = new window.google.maps.Geocoder();
  geoCoder.geocode(
    {
      location: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    },
    function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results.length > 0) {
          cbFunc && cbFunc(results);
        }
      }
    }
  );
};

const useGeocode = (
  googleMap: google.maps.Map<HTMLDivElement>,
  handleGeocoderCb: (results: google.maps.GeocoderResult[]) => void
) => {
  useEffect(() => {
    googleMap.addListener("click", geocoderCb(googleMap, handleGeocoderCb));
    return () => {};
  }, [googleMap, handleGeocoderCb]);
};

export default useGeocode;
