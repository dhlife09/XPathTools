function XPathClicker(xpath) {
    var xPathRes = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    xPathRes.singleNodeValue.click();
};