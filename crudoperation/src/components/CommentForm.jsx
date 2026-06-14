import { useState } from "react";

function CommentForm({ addComment }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addComment({
      name,
      email,
      body,
    });

    setName("");
    setEmail("");
    setBody("");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h3 className="mb-3">
          Add New Comment
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
          />

          <input
            className="form-control mb-3"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Write Comment"
            value={body}
            onChange={(e) =>
              setBody(e.target.value)
            }
            required
          />

          <button
            className="btn btn-primary w-100"
            type="submit"
          >
            Add Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;