let CurrentTime = () => {
  let dateTime = new Date();
  return (
    <p className="lead">
      The curren time is : {dateTime.toLocaleDateString()} -{" "}
      {dateTime.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
