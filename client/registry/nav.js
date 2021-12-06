import { app } from "./app"

export const links = {
  home: {
    name: app.initials,
    url: "/",
  },
}

export const loginLinks = {
  login: {
    name: "Log in",
    url: "/auth/login",
  },
  signup: {
    name: "Sign up",
    url: "/auth/signup",
  },
}


export const logoutLinks = {
  logout: {
    name: "Sign out",
    url: "/auth/logout",
  },
}
