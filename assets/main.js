$(function() {
  $('#drag-me').draggable( {
    containment: '#containment',
    cursor: 'move',
    snap: '#content'
  });
  $('#resize-me').resizable();
})