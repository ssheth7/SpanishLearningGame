import { app } from "./app"

export const links = {
  home: {
    name: app.initials,
    url: "/",
  },
  modules: {
    name: "Modules",
    url: "/modules",
  },
}

export const loginLinks = {
  login: {
    name: "Log in",
    url: "/auth/login",
  },
}

export const logoutLinks = {
  logout: {
    name: "Log out",
    url: "/auth/logout",
  },
}
