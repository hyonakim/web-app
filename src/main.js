(function () {


 let formUrl      ='http://json-data.herokuapp.com/forms';
 let formtemplate = function(data){
let template = `
<div class ='firstName'><input type="${data.text}" placeholder="${data.label}" id="${data.id}"></div>
<div class ='lastName'><input type='text' value= ${data.id}></div>
<div class='email'></div>
<div class='website'></div> 
<div class='lang'></div> 
<div class='comment'></div> 
<div class='mobno'></div> 
<div class='homeno'></div> 
<button class='submit'></div> 
`;
$('.container').append(template);
}


var form = $.ajax(
url :formUrl,
datatype:'jsonp', 
method  :'GET'
).then(function(response){
_.each(response, function(item){
if(item.type ==='text' || item.type ==='tel' || item.type='email'){
  console.log(item);
}

})
});

// _.each(response.object,function)















}());
