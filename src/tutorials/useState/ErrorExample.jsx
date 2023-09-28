const ErrorExample = () => {
  let count = 0;
  const increaseCount = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      useState error example
      <h2>{count}</h2>
      <button className="btn" onClick={increaseCount}>
        increment
      </button>
    </div>
  );
};

export default ErrorExample;
