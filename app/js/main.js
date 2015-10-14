'use strict';

(function () {

  var formUrl = 'http://json-data.herokuapp.com/forms';

  var promise = $.getJSON(formUrl);

  promise.then(function (response) {

    iterate(response);
  });

  var iterate = function iterate(response_arr) {

    _.each(response_arr, function (item) {
      if (item.type === 'text' || item.type === 'tel' || item.type === 'email') {
        var htmldata = formtemplate(item);
      } else if (item.type === "textarea") {} else if (item.type === 'select') {
        var htmldata = formtemplate2(item);
      } else if (item.type === "textarea") {

        var htmldata = formtemplate1(item);
      }

      $('.container').append(htmldata);
    });
  };

  var formtemplate = function formtemplate(data) {
    var template = '\n          <div class="input-data" >\n          <input class="input-fields" type="' + data.type + '" placeholder="' + data.label + '" id="' + data.id + '">\n          </div>';
    return template;
  };

  var formtemplate1 = function formtemplate1(data) {
    var template1 = '\n<div class="text-area" >\n          <input width ="200" type="' + data.type + '" placeholder="' + data.label + '" id="' + data.id + '">\n          \n          </div>';
    return template1;
  };

  var formtemplate2 = function formtemplate2(data) {

    var template2 = '\n<div class="lang-opt" >\n          <select class="sel-opt">\n          <option class ="lang" value="' + data.value + '">' + data.label + '</option>\n          </select>\n          </div>';

    return template2;
  };

  //  let formUrl      ='http://json-data.herokuapp.com/forms';
  //  let formtemplate = function(data){
  // let template = `
  // <div class ='firstName'><input type="${data.text}" placeholder="${data.label}" id="${data.id}"></div>
  // <div class ='lastName'><input type='text' value= ${data.id}></div>
  // `;
  // $('.container').append(template);
  // }

  // var form = $.ajax(
  // url :formUrl,
  // datatype:'json',
  // method  :'GET'
  // ).then(function(response){
  // _.each(response, function(item){
  // if(item.type ==='text' || item.type ==='tel' || item.type==='email'){
  //   console.log(item);
  // }

  // })

  // _.each(response.object,function)
})();