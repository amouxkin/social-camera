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

export const register = async (body) => {
  await fetch(urlCreator("signup"), {
    method: "POST",
    headers: header(),
    body: body,
  })
    .then(async (response) => {
      console.log(response);
      return await response.json()
    })
    .catch((e) => {
      console.log(e);
      return false;
    });
};
