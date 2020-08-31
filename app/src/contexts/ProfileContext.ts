import { createContext, Ref, RefObject } from "react";
import Webcam from "react-webcam";

export interface ProfileContextProps {
  webcamRef: Ref<Webcam>;
  containerRef: RefObject<HTMLDivElement>;
  width: number;
  height: number;
  setHeight: (value: number) => void;
  setWidth: (value: number) => void;
  image: string;
  setImage: (newImage: string) => void;
}

export const ProfileContext = createContext<Partial<ProfileContextProps>>({});
