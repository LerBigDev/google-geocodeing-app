import React, { useEffect } from "react";
import styled from "styled-components";
import GoogleMap from "./google-map";

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const GoogleMapPage = () => {
  useEffect(() => {}, []);

  return (
    <Root>
      <GoogleMap />
    </Root>
  );
};

export default GoogleMapPage;
