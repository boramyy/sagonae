import { Outlet, useLoaderData } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";

export const parttimerPageLoader = () => {
  console.log('parttimer !');

  return null;
}

function ParttimerPage(props) {
  console.log('ParttimerPage !!');

  const parttimerData = useLoaderData();
  console.log("parttimerData", parttimerData);

  return (
    <DefaultTemplate id="parttimer" title="this is parttimer!">
      <div>parttimer content</div>
      <Outlet />
    </DefaultTemplate>
  )
}

export default ParttimerPage