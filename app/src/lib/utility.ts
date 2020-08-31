import { useToasts } from "react-toast-notifications";

export const refreshBrowser = () => {
  window.location.reload();
};

export const useDelayedAlert = (
  message: string,
  appearance: string = "success",
  timeout: number = 500
): (() => void) => {
  const { addToast } = useToasts();

  return () => {
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
