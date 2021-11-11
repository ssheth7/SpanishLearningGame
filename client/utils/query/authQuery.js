const API_URL = "/api"

export const submitSignup = async ({email, password}) => {
  const result = await fetch(`${API_URL}/auth/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
  if (!result.ok) {
    if (result.status == 400) {
      throw res
    } else throw result
  }
  const res = await result.json()
  return res
}
