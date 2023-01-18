function doGet(e) {
  
  return HtmlService.createTemplateFromFile("Index").evaluate()
  .setTitle("Semak Resit")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


/* PROCESS FORM */
function processForm(formObject){ 
  var concat = formObject.searchtext;
  var result = "";
  if(concat){//Execute if form passes search text
      result = search(concat);
  }
  return result;
}

//SEARCH FOR MATCHED CONTENTS ;
function search(searchtext){
  var spreadsheetId   = '1g_1axQw9PHCcAjk9Ar_qaZWSYYzy7QQyty9W0OOnCaQ'; //** CHANGE !!!!
  var sheetName = "Data2"
  var range = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange();
  var data = range.getValues();
  var ar = [];
  
  data.forEach(function(f) {
    if (~[f[2]].indexOf(searchtext)) {
      ar.push([f[0],f[1],f[2],f[3],f[4],f[5],'<a target="_blank"  href='  + f[6] + '>' + 'Lihat' + '</a>']);
    }
  });
                                           
  return ar;
};
