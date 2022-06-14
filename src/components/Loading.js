import { ClipLoader } from "react-spinners";

const Loading = (props) => {
  return (
    <div className="loading">
      <ClipLoader
        speedMultiplier={0.5}
        loading={props.isLoading}
        size={150}
        color={"#8daa91"}
      />
    </div>
  );
};

export default Loading;
