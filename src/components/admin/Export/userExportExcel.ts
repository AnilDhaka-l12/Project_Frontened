import { getToken } from "../../../utils/auth";

const API_BASE_URL = "http://localhost:5082";

export async function downloadUserExcel() {
  try {
    const token = getToken();

    const response = await fetch(`${API_BASE_URL}/api/UserExport/excel`, {
      method: "GET",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    if (!response.ok) {
      throw new Error(`Excel download failed: ${response.status}`);
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "userexport.xlsx"; // ✅ important

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Excel download error:", error);
    alert("Failed to download Excel file");
  }
}