import { useToasts } from "react-toast-notifications";

export const refreshBrowser = () => {
  window.location.reload();
};

export const useDelayedAlert = (
  appearance: string = "success",
  timeout: number = 500
): ((message: string) => void) => {
  const { addToast } = useToasts();

  return (message: string) => {
    setTimeout(
      () =>
        addToast(message, {
          appearance,
          autoDismiss: true,
        }),
      timeout
    );
  };
};

export const base64ToJpeg = (dataURI, contentType = "image/jpeg"): Blob => {
  const byteString = atob(dataURI.split(",")[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }
  return new Blob([arrayBuffer], { type: contentType });
};
