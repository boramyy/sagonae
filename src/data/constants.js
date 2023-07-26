export const ENV = {
  IS_DEV: process.env.REACT_APP_ENV === 'DEV',
  GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  GOOGLE_DISCOVERY_DOC: 'https://sheets.googleapis.com/$discovery/rest?version=v4',
  GOOGLE_SCOPE: 'https://www.googleapis.com/auth/spreadsheets.readonly',
};

export const SPREADSHEET_INFO = {
  SPREADSHEET_ID: '1fLx74yK49ARCsc9Bm8OPUy6KUrpt5BxyHlIRehjCvvE',
}
