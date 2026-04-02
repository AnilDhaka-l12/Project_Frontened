type AuthData = {
  token: string;
  user: string;
};

const devAuth: AuthData = {
  token: "dev-token",
  user: "developer",
};

// fake login
export async function loginUser() {
  return devAuth;
}

// do nothing
export function saveAuth(_: AuthData) {}

// always return fake user
export function getAuth(): AuthData {
  return devAuth;
}

// ✅ needed by temp.tsx
export function getToken(): string {
  return devAuth.token;
}

// ✅ fix your current error
export function logoutUser() {
  // do nothing (login disabled)
}

// also keep this (some files may use it)
export function logout() {
  // do nothing
}

// always authenticated
export function isAuthenticated(): boolean {
  return true;
}