import { app } from "./app"

export const links = {
  home: {
    name: "Home",
    url: "/",
  },
  modules: {
    name: "Modules",
    url: "/modules",
  },
  feedback: {
    name: "Feedback",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeARE-eVRo0a84GVJJD98ZMtK8dys_IKy5mRmhM-oYR2xBvGQ/viewform",
  },
  faq: {
    name: "FAQ",
    url: "/faq"
  }
}

export const loginLinks = {
  login: {
    name: "Log in",
    url: "/auth/login",
  },
  create: {
    name: "Create an Account",
    url: "/auth/signup"
  }
}

export const logoutLinks = {
  logout: {
    name: "Log out",
    url: "/auth/logout",
  },
}
