import { useNavigate } from "react-router-dom";

import Layout from "../Components/Layout";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import ContentProduct from "../Components/ContentProduct";

export default function Tag() {
  const navigate = useNavigate();

  const redirectPage = (page) => {
    navigate(page);
  };
  return (
    <div style={{ marginBottom: 40 }}>
      <Layout redirectPage={redirectPage} />
      <div style={{ margin: "0px 50px 0px 50px" }}>
        <Content contentTitle="Video Clip" />
        <ContentProduct contentTitle="Product" />
        <Content contentTitle="Event" />
      </div>
    </div>
  );
}
