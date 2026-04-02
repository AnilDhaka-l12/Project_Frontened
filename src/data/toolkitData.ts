import type { ToolkitItem } from "../types/toolkit";

export const toolkitData: ToolkitItem[] = [
  {
    name: "Python Notebook",
    icon: "🐍",
    description: "Launch Python notebooks for data analysis and scripting.",
    options: ["Python 3.10", "CPU", "JupyterLab"],
    buttonText: "Launch Python",
  },
  {
    name: "R Notebook",
    icon: "📊",
    description: "Run R notebooks for statistics and visualization.",
    options: ["R 4.3", "CPU", "Jupyter Notebook"],
    buttonText: "Launch R",
  },
  {
    name: "Julia Notebook",
    icon: "⚡",
    description: "Use Julia notebooks for fast technical computing.",
    options: ["Julia 1.10", "GPU", "JupyterLab"],
    buttonText: "Launch Julia",
  },
];