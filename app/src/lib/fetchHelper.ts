import { base64ToJpeg, refreshBrowser } from "./utility";
import { useEffect } from "react";

interface RegisterResponse {
  id: number;
  latestImage: null | string;
  name: string;
  token: string;
}

export const isAuthenticated = (): boolean => "token" in localStorage;

const urlCreator = (url: string): string =>
  `${process.env.REACT_APP_BACKEND}/${url}`;

const header = (type = "application/json") => ({
  "Content-Type": type,
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const authenticate = async (auth: "login" | "signup", body) =>
  await fetch(urlCreator(auth), {
    method: "POST",
    headers: header(),
    body: body,
  }).then(async (response) => {
    response.json().then((register: RegisterResponse) => {
      for (const [key, value] of Object.entries(register)) {
        localStorage.setItem(key, value);
      }
    });
    return true;
  });

const unauthorised = async (response: Response): Promise<Response> => {
  if (response.status !== 200) {
    localStorage.clear();
    refreshBrowser();
    throw new Error(
      response.status === 403 ? "Unauthorised" : "Wrong Credentials"
    );
  }
  return response;
};

export const login = async (body): Promise<boolean> =>
  authenticate("login", body);

export const register = async (body): Promise<boolean> =>
  authenticate("signup", body);

export const logout = () => localStorage.clear();

export const getUnsignedUrl = async (): Promise<any> => {
  return await fetch(urlCreator("get-presigned-url"), {
    headers: header(),
  })
    .then(unauthorised)
    .then(async (response) => response.json().then((parsed) => parsed.url));
};

export const uploadImage = async (image: string, url) => {
  const data = new FormData()
  const  blob = base64ToJpeg(image);

  data.append('file', blob)
  console.log(url)

  return fetch(url, {
    method: "PUT",
    body: blob
  });
};
