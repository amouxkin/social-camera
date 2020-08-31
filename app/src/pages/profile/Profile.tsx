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
    const image = (state.webcamRef.current.getScreenshot());

    setLoading(true);

    getUnsignedUrl()
      .then((unsignedUrl) => {
        return uploadImage(image, unsignedUrl)
          .then((r) => {
            setUploadUrl(unsignedUrl);

            addToast("Image Uploaded", {
              appearance: "success",
              autoDismiss: true,
            });
          })
          .catch((e) => console.log(e));
      })
      .catch((error) => {
        console.log(error);

        addToast(error, {
          appearance: "error",
          autoDismiss: true,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout title="Take a snapshot">
      <Loading active={isLoading} spinner >
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
                <Image src={uploadUrl} alt={"image"} />
              )}
              <Button className="green" onClick={() => state.setImage(null)}>
                Clear
              </Button>
            </Wrapper>
          </ProfileContext.Provider>
        </Flex>
      </Loading>
    </Layout>
  );
};

export default Profile;
