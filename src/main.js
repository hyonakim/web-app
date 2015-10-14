(function () {

let formUrl      ='http://json-data.herokuapp.com/forms';

var promise = $.getJSON(formUrl);

promise.then(function(response){

iterate(response);

});

var iterate=function(response_arr){

  _.each(response_arr, function(item){
    if(item.type==='text' ||item.type==='tel'||item.type==='email'){
    var htmldata= formtemplate(item);
  }else if(item.type==="textarea"){

  }
  else if(item.type==='select'){
    var htmldata=formtemplate2(item);
  }
   else if(item.type==="textarea"){

  var htmldata=formtemplate1(item)
   }

   $('.container').append(htmldata);


    });
};



let formtemplate = function(data){
          let template = `
          <div class="input-data" >
          <input class="input-fields" type="${data.type}" placeholder="${data.label}" id="${data.id}">
          </div>`;
          return template;
        }


let formtemplate1 = function(data){
let template1 =`
<div class="text-area" >
          <input width ="200" type="${data.type}" placeholder="${data.label}" id="${data.id}">
          
          </div>`;  
        return template1;
 }    

let formtemplate2 = function(data){

let template2 =`
<div class="lang-opt" >
          <select class="sel-opt">
          <option class ="lang" value="${data.value}">${data.label}</option>
          </select>
          </div>`;

return template2;

}    



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















}());
