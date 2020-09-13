const functions = require("firebase-functions");
// const admin = require("firebase-admin");
const { google } = require("googleapis");
const sheets = google.sheets("v4");
const _ = require("lodash");

const spreadsheetId = "16Y2EyQrN4dnG5quEvYty4IGR3kLuKHItDf4r557PptI";
// const app = admin.initializeApp();
// const db = admin.database(app);
const serviceAccount = require("./match-4-help-firebase-adminsdk-lhr2l-9b85dfb98d.json");

const jwtClient = new google.auth.JWT({
  email: serviceAccount.client_email,
  key: serviceAccount.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const jwtAuthPromise = jwtClient.authorize();

const flatten = (data) => {
  var result = {};
  const recurse = function (cur, prop) {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      const length = cur.length;
      for (var i = 0; i < length; i++) recurse(cur[i], prop + "[" + i + "]");
      if (l === 0) result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + "." + p : p);
      }
      if (isEmpty && prop) result[prop] = {};
    }
  };
  recurse(data, "");
  return result;
};
// console.log(functions.region("europe-west3").database);
// exports.SyncToSheets1 = functions
//   .region("europe-west3")
//   .database.refFromURL(
//     "https://match-4-help.firebaseio.com/" + spreadsheetId + "/"
//   )
//   .onUpdate((change, context) => {
//     console.log("function 1");
//     console.log(change);
//     console.log(context);
//   });

exports.SyncToSheets4 = functions
  .region("europe-west3")
  .database.ref(spreadsheetId + "/Match4Help")
  .onUpdate(async (change, context) => {
    console.log("function 4");
    functions.logger.debug("Entered!");
    functions.logger.log("Entered!");
    functions.logger.info("Entered!");
    functions.logger.log("These are run logs:");

    const jsonData = change.after.val();

    functions.logger.log(jsonData);

    let allKeys = Object.keys(jsonData);
    let firstElement = allKeys[0] || 0;
    let headerData = flatten(jsonData[firstElement]);
    let keys = Object.keys(headerData);

    functions.logger.log("headerData keys:");
    functions.logger.log(headerData);

    let rows = [];
    for (const item in jsonData) {
      let val = jsonData[item];
      let row = [item];
      keys.forEach((key) => {
        row.push(_.get(val, key) || "");
      });
      rows.push(row);
    }
    let sheetData = [["id", ...keys], ...rows];

    functions.logger.log("sheet data:");
    functions.logger.log(sheetData);

    let range = `Match4Help!A1:${String.fromCharCode(65 + keys.length)}${
      allKeys.length + 1
    }`;

    functions.logger.log("range:");
    functions.logger.log(range);

    await jwtAuthPromise;
    await sheets.spreadsheets.values.update(
      {
        auth: jwtClient,
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: "RAW",
        requestBody: { values: sheetData },
      },
      {}
    );
  });
