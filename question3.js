var libxmljs = require('libxmljs');

function xmlChecker(string) {
  try {
    libxmljs.parseXml(string);
  } catch (e) {
    return false;
  }
  return true;
}

console.log(xmlChecker('<a><b property="value">This is some text</b></a>')); // true

console.log(xmlChecker('<a><b property="value">This is some text</a>')); // false
