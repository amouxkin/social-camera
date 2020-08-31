import React, { useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Layout } from "../../components/layout";
import { Button, Flex } from "../../components/styles";
import { Camera, Wrapper, Image, UploadButton } from "./style";
import { WebcamComponent } from "../../components/webcam/Webcam";
import { ProfileContext } from "../../contexts/ProfileContext";
import { getUnsignedUrl, uploadImage } from "../../lib/fetchHelper";
import Loading from "react-loading-overlay";

const Profile = () => {
  const state: any = {
    webcamRef: useRef(null),
    containerRef: useRef(null),
  };
  [state.height, state.setHeight] = useState(720);
  [state.width, state.setWidth] = useState(1280);
  [state.image, state.setImage] = useState(null);
  const [uploadUrl, setUploadUrl] = useState();
  const [isLoading, setLoading] = useState(false);
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

  const upload = () => {
    setLoading(true);


    // Wait until url is fetched.

    uploadImage(state.image, uploadUrl)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  return (
    <Layout title="Take a snapshot">
      <Loading>
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
                <Image src={state.image} alt={"image"} />
              )}
              <Button className="green" onClick={() => state.setImage(null)}>
                Clear
              </Button>
            </Wrapper>
          </ProfileContext.Provider>
        </Flex>
        <UploadButton onClick={upload}>Upload</UploadButton>
      </Loading>
    </Layout>
  );
};

export default Profile;
