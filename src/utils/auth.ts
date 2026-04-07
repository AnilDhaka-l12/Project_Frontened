type AuthData = {
  token: string;
  user: string;
};

export async function loginUser(email: string, password: string): Promise<AuthData> {
  const response = await fetch("http://localhost:5082/api/Auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const data = await response.json();
  return data;
}

export function saveAuth(authData: AuthData) {
  localStorage.setItem("auth", JSON.stringify(authData));
}

export function getAuth(): AuthData | null {
  const authData = localStorage.getItem("auth");
  return authData ? JSON.parse(authData) : null;
}

export function getToken(): string | null {
  const authData = getAuth();
  return authData?.token || null;
}

export function logoutUser() {
  localStorage.removeItem("auth");
}

export function logout() {
  localStorage.removeItem("auth");
}

export function isAuthenticated(): boolean {
  return !!getToken();
}