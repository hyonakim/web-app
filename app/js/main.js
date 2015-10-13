'use strict';

(function () {

  var formUrl = 'http://json-data.herokuapp.com/forms';

  var formtemplate = function formtemplate(data) {
    var template = '\n// <div class =\'firstName\'><input type="' + data.type + '" placeholder="' + data.label + '" id="' + data.id + '"></div>\n\n<div class = \'dataInfo\'>\n<input type=\'' + data.type + '\' placeholder=\'{data.label}\' id=\'' + data.id + '\'>\n<button class=\'submit\'>Submit Form</button>\n</div> \n';
    $('.container').append(template);
  };

  var form = $.ajax({
    url: formUrl,
    dataType: 'json',
    method: 'GET'
  }).then((function (response) {
    _.each(response, function (item) {
      if (item.type === 'text' || item.type === 'tel' || item.type === 'email') {
        console.log(item);
      }
    });
  })());

  // _.each(response.object,function)
})();