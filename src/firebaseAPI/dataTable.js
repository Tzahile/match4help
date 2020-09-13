import firebaseInit from "../firebaseInit";

export async function UpdateTableValue(modifiedRow) {
  console.log(modifiedRow);
  const fire = firebaseInit.sheetsCollection;
  const table = await fire.child("/Match4Help").once("value");
  console.log(table);
  console.log(JSON.stringify(table));
  fire.child(`Match4Help/${modifiedRow.id}`).update(modifiedRow);
}
