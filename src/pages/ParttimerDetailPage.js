import { useLoaderData } from "react-router-dom";

export const parttimerDetailPageLoader = () => {
  // const { parttimerId } = params;
  // console.log('parttimer detail params', params);
  console.log('detail !');
  return null;
}

function ParttimerDetailPage(props) {
  console.log('DetailPage !!');

  const parttimerDetailData = useLoaderData();
  console.log("parttimerDetailData", parttimerDetailData);
  
  return (
    <div>parttimer detail content</div>
  )
}

export default ParttimerDetailPage