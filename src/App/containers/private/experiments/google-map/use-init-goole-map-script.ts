import { useEffect } from "react";

const useInitGoogleMapScript = (createGoogleMapCb: () => void) => {
  useEffect(() => {
    const isGoogleMapScriptLoaded = document.getElementById("googleMapScript");
    if (isGoogleMapScriptLoaded) {
      console.info("googleMapScript already initialized");
      return;
    }

    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.id = "googleMapScript";
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", createGoogleMapCb);

    return () => {
      googleMapScript.removeEventListener("load", createGoogleMapCb);
      window.document.body.removeChild(googleMapScript);
    };
  }, [createGoogleMapCb]);
};

export default useInitGoogleMapScript;
