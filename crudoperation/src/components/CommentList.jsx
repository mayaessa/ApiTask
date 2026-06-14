import CommentItem from "./CommentItem";

function CommentList({
  comments,
  deleteComment,
  updateComment,
}) {
  return (
    <div className="row">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="col-md-6 mb-4"
        >
          <CommentItem
            comment={comment}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
        </div>
      ))}
    </div>
  );
}

export default CommentList;