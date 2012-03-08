(function() {
  function createPriceIframe(pId) {
    var i = document.createElement('iframe');
    i.src = 'http://360444.com/product/' + pId + '.html';
    i.style.width = '600px';
    i.style.height = '300px'
    return i;
  }
  function insertIframe (pId) {
    var i = createPriceIframe(pId);
    var r = document.getElementById('shipBarPanel');
    r.parentNode.replaceChild(i, r);
  }
  function getPId() {
    var u = document.location.href;
    var reg = /(\d+)\.html$/;
    return u.match(reg)[1]
  }
  insertIframe(getPId());
}());
