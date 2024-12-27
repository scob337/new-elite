import { stickyNav } from "@/src/utils";
import { useEffect } from "react";
import DefaultHeader from "./DefaultHeader";

const Header = ({ header }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return(
    <DefaultHeader />
  )
};
export default Header;
