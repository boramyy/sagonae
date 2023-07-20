import { useLoaderData } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export const mainPageLoader = () => {
  console.log('main !');
  return null;
}

function MainPage(props) {
  console.log('MainPage !!');

  const mainData = useLoaderData();
  console.log("mainData", mainData);

  return (
    <DefaultTemplate id="main" title="this is main!">
      <div>main content</div>
    </DefaultTemplate>
  )
}

export default MainPage