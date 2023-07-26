import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DefaultTemplate from "../components/templates/DefaultTemplate";
import AuthContext from "../store/AuthContext";
import { SPREADSHEET_INFO } from "../data/constants";

export const mainPageLoader = () => {
  console.log('main !');
  return null;
}

function MainPage(props) {
  // const mainData = useLoaderData();
  const [text, setText] = useState('');
  const {isLogin} = useContext(AuthContext);
  // console.log("mainData", mainData);


  const onClickGetList = async () => {
    let response;
    try {
      // Fetch first 10 files
      response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_INFO.SPREADSHEET_ID,
        range: 'DATA!A2:E',
      });
      console.log('onClickGetList response', response)
    } catch (err) {
      console.log('onClickGetList err', err)
      setText(err.result.error.message);
      return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
      setText('No values found.');
      return;
    }
    // Flatten to string to display
    const output = range.values.reduce(
      (str, row) => `${str}${row[0]}, ${row[1]}\n`, 'Name, Major:\n');
    setText(output);
  }

  return (
    <DefaultTemplate id="main" title="this is main!">
      { isLogin ? '로그인했지롱' : '로그인하세요'}
      <div>main content</div>
      
      <button onClick={onClickGetList}>리스트 불러오기</button>
      <pre id="content">{text}</pre>

    </DefaultTemplate>
  )
}

export default MainPage