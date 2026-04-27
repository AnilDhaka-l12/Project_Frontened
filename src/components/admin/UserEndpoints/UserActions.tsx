type Props = {
  userId: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  disabled?: boolean;
};

function UserActions({ userId, onEdit, onDelete, disabled = false }: Props) {
  return (
    <div className="paginated-actions">
      <button
        type="button"
        className="paginated-edit-btn"
        onClick={() => onEdit(userId)}
        disabled={disabled}
      >
        Edit
      </button>

      <button
        type="button"
        className="paginated-delete-btn"
        onClick={() => onDelete(userId)}
      >
        Delete
      </button>
    </div>
  );
}

export default UserActions;