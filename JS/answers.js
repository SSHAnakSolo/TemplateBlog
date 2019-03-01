(function(w, d) {
  var panel = d.getElementsByClassName('jawaban');
  if (!panel) return;
  for (var i = 0, len = panel.length; i < len; ++i) {
    if (!panel[i].id) panel[i].id = 'jawaban-' + (i + 1);
  }
  function togglejawaban(elem, index) {
    var toggle = d.createElement('a'),
        toggleText = (elem[index].getAttribute('text-jawaban') || '&nbsp;').split(' | '),
        togglePlacement = elem[index].getAttribute('posisi-jawaban') && elem[index].getAttribute('posisi-jawaban') !== 'bottom' ? elem[index].getAttribute('posisi-jawaban') : 'bottom';
    toggleText.push(toggleText[0]);
    toggle.className = 'jawaban-toggle';
    toggle.href = '#' + elem[index].id;
    toggle.innerHTML = toggleText[/(^| )tutup-jawaban( |$)/.test(elem[index].className) ? 0 : 1];
    toggle.onclick = function() {
      var target = this.parentNode,
          isExpanded = /(^| )buka-jawaban( |$)/.test(target.className),
          isConnected = target.getAttribute('data-connection');
      if (/(^| )disable-jawaban( |$)/.test(target.className)) return false;
      target.className = isExpanded ? target.className.replace(/(^| )buka-jawaban( |$)/, '$1tutup-jawaban$2') : target.className.replace(/(^| )tutup-jawaban( |$)/, '$1buka-jawaban$2');
      this.innerHTML = toggleText[isExpanded ? 0 : 1];
      if (isConnected) {
        for (var i = 0, len = elem.length; i < len; ++i) {
          var isConnectedTo = elem[i].getAttribute('data-connection'),
              toggleTextSibling = (elem[i].getAttribute('text-jawaban') || '&nbsp;').split(' | '),
              togglePlacementSibling = elem[i].getAttribute('posisi-jawaban') && elem[i].getAttribute('posisi-jawaban') !== 'bottom' ? elem[i].getAttribute('posisi-jawaban') : 'bottom';
          if (isConnectedTo && isConnected === isConnectedTo && target.id !== elem[i].id) {
            elem[i].className = elem[i].className.replace(/(^| )buka-jawaban( |$)/, '$1tutup-jawaban$2');
            elem[i].children[togglePlacementSibling === 'bottom' ? 1 : 0].innerHTML = toggleTextSibling[0];
          }
        }
      }
      return false;
    };
    toggle.onmousedown = false;
    elem[index].insertBefore(toggle, togglePlacement == 'bottom' ? null : elem[index].firstChild);
  }
  for (var i = 0, len = panel.length; i < len; ++i) {
    togglejawaban(panel, i);
  }
})(window, document);
