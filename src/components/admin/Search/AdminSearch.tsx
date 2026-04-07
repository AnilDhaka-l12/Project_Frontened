import "./AdminSearch.css";

type AdminSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

function AdminSearch({ value, onChange }: AdminSearchProps) {
  return (
    <div className="admin-search">
      <input
        type="text"
        placeholder="Search users, email, organization..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default AdminSearch;