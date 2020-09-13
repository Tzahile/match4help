import firebaseInit from "../firebaseInit";

export async function UpdateTableValue(modifiedRow) {
  const fire = firebaseInit.sheetsCollection;
  // const table = await fire.child("/Match4Help").once("value");
  fire.child(`Match4Help/${modifiedRow.id}`).update(modifiedRow);
}
