import { useEffect, useState } from "react";
import "./EditUserModal.css";

export type EditableUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  occupation: string;
  organization: string;
  isActive: boolean;
};

type Props = {
  isOpen: boolean;
  user: EditableUser | null;
  onClose: () => void;
  onSave: (updatedUser: EditableUser) => Promise<void>;
};

function EditUserModal({ isOpen, user, onClose, onSave }: Props) {
  const [formData, setFormData] = useState<EditableUser | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen && user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(user);
    }
  }, [isOpen, user]);

  if (!isOpen || !formData) return null;

  const handleChange = (
    field: keyof EditableUser,
    value: string | boolean
  ) => {
    setFormData((prev) =>
      prev
        ? {
            ...prev,
            [field]: value,
          }
        : prev
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    try {
      setSaving(true);
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Failed to update user.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="edit-modal-overlay">
      <div className="edit-modal">
        <h2>Edit User</h2>

        <form onSubmit={handleSubmit}>
          <div className="name-row">
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="First Name"
              required
            />

            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Last Name"
            />
          </div>

          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email"
            required
          />

          <input
            type="text"
            value={formData.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            placeholder="Occupation"
          />

          <input
            type="text"
            value={formData.organization}
            onChange={(e) => handleChange("organization", e.target.value)}
            placeholder="Organization"
          />

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => handleChange("isActive", e.target.checked)}
            />
            Active
          </label>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-btn" disabled={saving}>
              {saving ? "Saving..." : "Update User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserModal;