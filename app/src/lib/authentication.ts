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
      response.json()
        .then((register: RegisterResponse) => {
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
