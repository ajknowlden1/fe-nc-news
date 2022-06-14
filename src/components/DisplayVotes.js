export const DisplayVotes = (props) => {
  return (
    <span className="article__votes">
      <p>Votes: {props.articleVotes}</p>
      <button onClick={() => props.handleVotes(1)} className="vote-btn">
        Upvote
      </button>
      <button onClick={() => props.handleVotes(-1)} className="vote-btn">
        Downvote
      </button>
    </span>
  );
};
