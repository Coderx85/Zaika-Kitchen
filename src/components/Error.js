import { useRouteError } from "react-router-dom";
//this useRouteError is used to show more about the error
//when ever use comes then it shows it a hook

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h2>OOPS! Something went wrong!</h2>
      <h4>
        {err.status}:{err.statusText}
      </h4>
    </div>
  );
};

export default Error;
