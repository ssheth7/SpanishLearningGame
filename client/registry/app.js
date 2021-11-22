const appname = "Spanish Learning Game"

export const app = {
  appname,
  initials: appname.split(' ').map(word => word[0]).join(''),
  description: "A game for learning Spanish",
  keywords: ["game", "spanish", "learn spanish"],
  type: "website",
}