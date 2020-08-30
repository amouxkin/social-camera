export const isAuthenticated = (): boolean => "token" in localStorage;

const urlCreator = (url: string): string =>
  `${process.env.REACT_APP_BACKEND}/${url}`;

const responseJson = async (response) => await response.json();

const header = (type = "application/json") => ({
  "Content-Type": type,
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export const login = async () => {
  // fetch({
  //   url: `${process.env.REACT_APP_BACKEND}/login`,
  // });
};

export const logout = () => localStorage.clear();

interface RegisterResponse {
  id: number;
  latestImage: null | string;
  name: string;
  token: string;
}

export const register = async (body): Promise<boolean> => {
  return await fetch(urlCreator("signup"), {
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
};
