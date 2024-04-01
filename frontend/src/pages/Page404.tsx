import { Link } from "react-router-dom";
import ErrorMessage from "../../frontend/components/ErrorMessage";

type Props = {
  message?: string;
};

const Page404 = ({ message }: Props) => {
  return (
    <div>
      <ErrorMessage />
      <p className="text-center">
        {message ? message : "The page doesn't exist."}
        <Link className="text-info" to="/">
          Back to Main Page
        </Link>
      </p>
    </div>
  );
};

export default Page404;
