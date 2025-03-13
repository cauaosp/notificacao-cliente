export const FakeLoginApi = async (user: string, password: string) => {
  // Simulated API response (Replace this with actual API request)
  if (user === "admin" && password === "qwe123") {
    return { role: "admin", error: "" };
  } else if (user == "admin" && password != "qwe123") {
    return { role: "", error: "Senha incorreta!" };
  } else {
    return { role: "client", error: "" };
  }
};
