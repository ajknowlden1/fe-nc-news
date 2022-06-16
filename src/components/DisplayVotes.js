export const DisplayVotes = (props) => {
  return (
    <div className="article__votes">
      <p className="vote-text">Votes: {props.articleVotes}</p>
      <div className="vote-btn-wrapper">
        <button onClick={() => props.handleVotes(1)} className="vote-btn">
          <span class="material-symbols-outlined">thumb_up</span>
        </button>
        <button onClick={() => props.handleVotes(-1)} className="vote-btn">
          <span class="material-symbols-outlined">thumb_down</span>
        </button>
      </div>
    </div>
  );
};
