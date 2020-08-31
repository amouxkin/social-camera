import { refreshBrowser } from "./utility";
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
  })
    .then(async (response) => {
      response.json().then((register: RegisterResponse) => {
        for (const [key, value] of Object.entries(register)) {
          localStorage.setItem(key, value);
        }
      });
      return true;
    })
    .catch((e) => {
      console.log(e);
      return false;
    });

export const login = async (body): Promise<boolean> =>
  authenticate("login", body);

export const register = async (body): Promise<boolean> =>
  authenticate("signup", body);

export const logout = () => localStorage.clear();

const unauthorised = async (response: Response): Promise<Response> => {
  if (response.status === 403) {
    localStorage.clear();
    refreshBrowser();
    throw new Error("Unauthorised");
  }
  return response;
};

export const getUnsignedUrl = async (): Promise<any> => {
  fetch(urlCreator("get-presigned-url"), {
    headers: header(),
  }).then(unauthorised)
    .then((response) => {
      response.json().then((parsed) => {
        return parsed.url;
      });
    })
};

export const uploadImage = async (image: string, url) => {
  fetch(urlCreator(url), {
    method: "PUT",
    body: JSON.stringify({
      file: image,
    }),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
