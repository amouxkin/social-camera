import React, { useRef, useEffect, useState, useContext } from "react";
import Webcam from "react-webcam";
import { Container } from "./style";
import { ProfileContext } from "../../contexts/ProfileContext";


export const WebcamComponent = () => {
  const state = useContext(ProfileContext);

  useEffect(() => {
    const { clientHeight, clientWidth } = state.containerRef.current;
    state.setHeight(clientHeight);
    state.setWidth(clientWidth);
  }, [state.containerRef.current]);

  return (
    <Container ref={state.containerRef}>
      <Webcam
        audio={false}
        ref={state.webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ width: state.width, height: state.height, facingMode: "user" }}
      />
    </Container>
  );
};
