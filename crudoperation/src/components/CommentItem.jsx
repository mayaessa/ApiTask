import { useState } from "react";

function CommentItem({
  comment,
  deleteComment,
  updateComment,
}) {
  const [isEditing, setIsEditing] =
    useState(false);

  const [editedBody, setEditedBody] =
    useState(comment.body);

  const handleSave = () => {
    updateComment(
      comment.id,
      editedBody
    );

    setIsEditing(false);
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="fw-bold">
          {comment.name}
        </h5>

        <p className="text-muted">
          {comment.email}
        </p>

        {isEditing ? (
          <textarea
            className="form-control mb-3"
            rows="3"
            value={editedBody}
            onChange={(e) =>
              setEditedBody(
                e.target.value
              )
            }
          />
        ) : (
          <p>{comment.body}</p>
        )}

        <div className="d-flex gap-2">
          {!isEditing ? (
            <button
              className="btn btn-warning"
              onClick={() =>
                setIsEditing(true)
              }
            >
              Edit
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={handleSave}
            >
              Save
            </button>
          )}

          <button
            className="btn btn-danger"
            onClick={() =>
              deleteComment(comment.id)
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;