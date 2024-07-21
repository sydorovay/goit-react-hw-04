const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className="load-more">
      <button onClick={onLoadMore}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;