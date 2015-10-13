'use strict';

(function () {

  var formUrl = 'http://json-data.herokuapp.com/forms';
  var formtemplate = function formtemplate(data) {
    var template = '\n<div class =\'container\'><input type=\'' + data.text + '\' placeholder= \'' + data.label + '\' id=\'' + data.id + '\' ></div>\n';
  };

  var form = $.ajax({
    url: formUrl
  }).then(function (response) {
    _.each(response, function (item) {
      var itemHTML = formtemplate(item);
      if (item.type === "text" || item.type === 'tel' || item.type === 'email') {
        console.log(itemHTML);
        $('.container').append(itemHTML);
      }
    });
  });

  // _.each(response.object,function)
})();