function XPathCollector(xpath) {
    var result = document.evaluate(xpath, document, null, XPathResult.STRING_TYPE, null).stringValue;
    return result;
}