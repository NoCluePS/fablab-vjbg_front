import axios from "axios";

const API = "http://localhost:8000";

enum Routes {
  Login = "/login",
  Register = "/register",
  Projects = "/project",
}

export const CreateProject = (
  title: string,
  description: string,
  supervisor: string,
  images: string[]
) => {
  axios
    .create({ withCredentials: true })
    .post(
      API + Routes.Projects,
      JSON.stringify({
        title,
        description,
        supervisor,
        images,
      }),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    )
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log(e.message);
      return e.message;
    });
};

export const GetProjects = async () => {
  const response = await axios.get(API + Routes.Projects);
  return response;
};

export const LoginFunc = async (email: string, password: string) => {
  const response = await axios.create({ withCredentials: true }).post(
    API + Routes.Login,
    JSON.stringify({
      email,
      password,
    }),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  return response;
};

export const RegisterFunc = (
  email: string,
  password: string,
  name: string,
  secret: string
) => {
  axios
    .create({ withCredentials: true })
    .post(
      API + Routes.Register,
      JSON.stringify({
        email,
        password,
        name,
        secret,
      }),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    )
    .then(({ data }) => {
      return data;
    })
    .catch((e) => {
      console.log(e.message);
      return e.message;
    });
};
