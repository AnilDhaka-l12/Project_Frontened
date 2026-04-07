import { getToken } from "../../../utils/auth";

const API_BASE_URL = "http://localhost:5082"; // change if needed

export async function downloadUserCsv() {
  const token = getToken();

  const response = await fetch(`${API_BASE_URL}/api/UserExport/csv`, {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  if (!response.ok) {
    throw new Error("CSV download failed");
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "userexport.csv"; // ✅ file name
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.URL.revokeObjectURL(url);
}