import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import loaderImg from "../assets/loading.gif";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  // if Loading
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img src={loaderImg} alt="" />
      </div>
    );
  }

  // Validation user.
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  } else {
    return <div>{children}</div>;
  }
};

export default PrivateRoute;
