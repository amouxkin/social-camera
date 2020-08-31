import React, { RefObject, useRef, useState } from 'react';

import Webcam from 'react-webcam';
import { Layout } from '../../components/layout';
import { Button, Flex } from '../../components/styles';
import { Camera, Wrapper } from './style';
import { WebcamComponent } from '../../components/webcam/Webcam';
import { ProfileContext } from '../../contexts/ProfileContext';
import { getUnsignedUrl } from '../../lib/authentication';

const Profile = () => {
  const state = {
    webcamRef: useRef(null),
    containerRef: useRef(null),
  };
  [state.height, state.setHeight] = useState(720);
  [state.width, state.setWidth] = useState(1280);
  [state.image, state.setImage] = useState(null);

  const capture = () => {
    // const image = new Image();
    const imageSrc = state.webcamRef.current.getScreenshot();
    state.setImage(imageSrc);
    getUnsignedUrl()
      .then((unsignedUrl) => {
        alert('then');
        alert(unsignedUrl);
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  return (
    <Layout title="Take a snapshot">
      <Flex>
        <ProfileContext.Provider value={state}>
          <Wrapper>
            <Camera>
              {/*  Webcam stream shows here */}
              <WebcamComponent />
            </Camera>
            <Button className="primary" onClick={capture}>
              Take shot
            </Button>
          </Wrapper>
          <Wrapper>
            <Camera>uploaded snapshot shows here</Camera>
            <Button className="green">Clear</Button>
          </Wrapper>
        </ProfileContext.Provider>
      </Flex>
    </Layout>
  );
};

export default Profile;
