import { useContext } from "react";
import {AuthContext} from "../../contexts/AuthContext/AuthContext";

export default () => {
  const context = useContext(AuthContext);

  return context;
};