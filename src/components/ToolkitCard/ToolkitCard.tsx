import type { ToolkitItem } from "../../types/toolkit";
import "./ToolkitCard.css";

type Props = {
  tool: ToolkitItem;
};

function ToolkitCard({ tool }: Props) {
  const handleLaunch = () => {
    alert(`${tool.name} is launching...`);
  };

  return (
    <div className="toolkit-card">
      <div className="toolkit-card-icon">{tool.icon}</div>

      <h3 className="toolkit-card-title">{tool.name}</h3>
      <p className="toolkit-card-description">{tool.description}</p>

      <div className="toolkit-card-options">
        {tool.options.map((option: string, index: number) => (
          <span key={index} className="toolkit-card-option">
            {option}
          </span>
        ))}
      </div>

      <button className="toolkit-card-button" onClick={handleLaunch}>
        {tool.buttonText}
      </button>
    </div>
  );
}

export default ToolkitCard;