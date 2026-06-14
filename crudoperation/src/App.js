import { useState, useEffect } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const addComment = async (newComment) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }
    );

    const data = await response.json();

    setComments((prev) => [ ...prev ,data]);
      
  };

  const deleteComment = async (id) => {
    await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        method: "DELETE",
      }
    );

    setComments((prev) =>
      prev.filter((comment) => comment.id !== id)
    );
  };

  const updateComment = async (id, body) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body }),
      }
    );

    const updated = await response.json();

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id
          ? { ...comment, body: updated.body }
          : comment
      )
    );
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">
        Comments CRUD App 
      </h1>

      <CommentForm addComment={addComment} />

      <CommentList
        comments={comments}
        deleteComment={deleteComment}
        updateComment={updateComment}
      />
    </div>
  );
}

export default App;