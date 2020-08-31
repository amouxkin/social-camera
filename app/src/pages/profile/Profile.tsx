import React, { useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Layout } from "../../components/layout";
import { Button, Flex } from "../../components/styles";
import { Camera, Wrapper, Image } from "./style";
import { WebcamComponent } from "../../components/webcam/Webcam";
import { ProfileContext } from "../../contexts/ProfileContext";
import { getUnsignedUrl } from "../../lib/authentication";

const Profile = () => {
  const state: any = {
    webcamRef: useRef(null),
    containerRef: useRef(null),
  };
  [state.height, state.setHeight] = useState(720);
  [state.width, state.setWidth] = useState(1280);
  [state.image, state.setImage] = useState(null);
  const [uploadUrl, setUploadUrl] = useState();
  const { addToast } = useToasts();

  const capture = () => {
    state.setImage(state.webcamRef.current.getScreenshot());

    if (!uploadUrl)
      getUnsignedUrl()
        .then((unsignedUrl) => !uploadUrl && setUploadUrl(unsignedUrl))
        .catch((error) => {
          console.log(error);
          addToast(error, {
            appearance: "error",
            autoDismiss: true,
          });
        });
  };

  return (
    <Layout title="Take a snapshot">
      <Flex>
        <ProfileContext.Provider value={state}>
          <Wrapper>
            <Camera>
              <WebcamComponent />
            </Camera>
            <Button className="primary" onClick={capture}>
              Take shot
            </Button>
          </Wrapper>
          <Wrapper>
            {!state.image ? (
              <Camera>uploaded snapshot shows here</Camera>
            ) : (
              <Image src={state.image}  alt={"image"}/>
            )}
            <Button className="green" onClick={() => state.setImage(null)}>Clear</Button>
          </Wrapper>
        </ProfileContext.Provider>
      </Flex>
    </Layout>
  );
};

export default Profile;
