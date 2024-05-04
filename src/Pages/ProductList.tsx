import * as React from "react";
import { useDispatch } from "react-redux";
import { setList } from "../appState/reducers/product";
import { useNavigate } from "react-router-dom";
import { logout } from "../appState/reducers/user";

interface IProductListProps {}

const ProductList: React.FunctionComponent<IProductListProps> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  setTimeout(() => {
    dispatch(
      setList([
        {
          name: "demo",
        },
      ])
    );
  }, 2000);
  return (
    <div>
      <button onClick={() => navigate("/login")}>Login</button>
      <button
        onClick={() => {
          dispatch(logout(null));
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ProductList;
