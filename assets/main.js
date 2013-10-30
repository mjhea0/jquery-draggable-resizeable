$(function() {
  $('#resize-me').resizable();
  $('#drag-me').draggable( {
    containment: '#containment',
    cursor: 'move',
    snap: '#content'
  });
})


