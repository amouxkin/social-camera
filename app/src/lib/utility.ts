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
