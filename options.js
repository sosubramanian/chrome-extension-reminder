
function ghost(isDeactivated) {
  options.style.color = isDeactivated ? 'graytext' : 'black';
                                              // The label color.
  options.frequency.disabled = isDeactivated; // The control manipulability.
}

window.addEventListener('load', function() {

  loadTime();

  // Initialize the option controls.
  options.isActivated.checked = JSON.parse(localStorage.isActivated);
                                         // The display activation.
  options.frequency.value = localStorage.frequency;
                                         // The display frequency, in minutes.
  options.content.value = localStorage.content;

  if (!options.isActivated.checked) { ghost(true); }

  // Set the display activation and frequency.
  options.isActivated.onchange = function() {
    localStorage.isActivated = options.isActivated.checked;
    ghost(!options.isActivated.checked);
  };

  options.frequency.onchange = function() {
    localStorage.frequency = options.frequency.value;
  };

  options.content.onchange = function() {
    localStorage.content = options.content.value;
  };

  var checkboxes = $("[name='daysofweek'] [type='checkbox']");
  checkboxes.change(function() {
    var daysofweek = [];
    for (cb of checkboxes)
      if (cb.checked)
        daysofweek.push(cb.value);
    localStorage.daysofweek = daysofweek;
  });

  options.startHr.onchange = function() {
    localStorage.startHr = options.startHr.value;
  };

  options.startMin.onchange = function() {
    localStorage.startMin = options.startMin.value;
  };

  options.endHr.onchange = function() {
    localStorage.endHr = options.endHr.value;
  };

  options.endMin.onchange = function() {
    localStorage.endMin = options.endMin.value;
  };

});

function loadTime() {
  for (var i = 0; i <= 60; i++) {

    if (i <= 24) {
      $("select[name='startHr']").append("<option value='" + i + "'>" + i + "</option>");
      $("select[name='endHr']").append("<option value='" + i + "'>" + i + "</option>");  
    }

    $("select[name='startMin']").append("<option value='" + i + "'>" + i + "</option>");
    $("select[name='endMin']").append("<option value='" + i + "'>" + i + "</option>");
  }
}
