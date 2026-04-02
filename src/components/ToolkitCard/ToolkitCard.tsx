import type { ToolkitItem } from "../types/toolkit";

interface ToolkitCardProps {
  tool: ToolkitItem;
}

function ToolkitCard({ tool }: ToolkitCardProps) {
  const handleLaunch = () => {
    alert(`${tool.name} is launching...`);
  };

  return (
    <div className="bg-[#111827] rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-blue-500 transition">
      <div className="text-6xl text-center mb-4">{tool.icon}</div>

      <h2 className="text-2xl font-semibold text-center mb-3">
        {tool.name}
      </h2>

      <p className="text-gray-400 text-center mb-6">
        {tool.description}
      </p>

      <button
        onClick={handleLaunch}
        className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold mb-4"
      >
        {tool.buttonText}
      </button>

      <div className="text-sm text-gray-400 space-y-2 text-center">
        {tool.options.map((option) => (
          <div key={option}>{option}</div>
        ))}
      </div>
    </div>
  );
}

export default ToolkitCard;