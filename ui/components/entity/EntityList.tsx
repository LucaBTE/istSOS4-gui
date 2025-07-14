import React from "react";
import EntityAccordion from "../EntityAccordion";

interface EntityListProps {
  items: any[];
  fields: any[];
  expandedId: string | null;
  onItemSelect: (id: string) => void;
  entityType: string;
  onEdit: (entity: any) => void;
  onSaveEdit: (updatedEntity: any, originalEntity: any) => void;
  onDelete: (id: string) => void;
  onCreate: (newEntity: any) => void;
  handleCancelCreate: () => void;
  handleCancelEdit: () => void;
  showCreateForm: boolean;
  isCreating: boolean;
  createError: string | null;
  editEntity: any;
  isEditing: boolean;
  editError: string | null;
  token: string;
  nestedEntities: Record<string, any>;
}

export const EntityList: React.FC<EntityListProps> = ({
  items,
  fields,
  expandedId,
  onItemSelect,
  entityType,
  onEdit,
  onSaveEdit,
  onDelete,
  onCreate,
  handleCancelCreate,
  handleCancelEdit,
  showCreateForm,
  isCreating,
  createError,
  editEntity,
  isEditing,
  editError,
  token,
  nestedEntities
}) => {
  if (items.length === 0 && !showCreateForm) {
    return <p>Nessuna entità disponibile.</p>;
  }

  return (
    <EntityAccordion
      items={items}
      fields={fields}
      expandedId={expandedId}
      onItemSelect={onItemSelect}
      entityType={entityType}
      onEdit={onEdit}
      onSaveEdit={onSaveEdit}
      onDelete={onDelete}
      onCreate={onCreate}
      handleCancelCreate={handleCancelCreate}
      handleCancelEdit={handleCancelEdit}
      showCreateForm={showCreateForm}
      isCreating={isCreating}
      createError={createError}
      editEntity={editEntity}
      isEditing={isEditing}
      editError={editError}
      token={token}
      nestedEntities={nestedEntities}
    />
  );
};