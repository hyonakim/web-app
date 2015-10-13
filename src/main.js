(function () {


 let formUrl      ='http://json-data.herokuapp.com/forms';

 let formtemplate = function(data){
let template = `
// <div class ='firstName'><input type="${data.type}" placeholder="${data.label}" id="${data.id}"></div>

<div class = 'dataInfo'>
<input type='${data.type}' placeholder='{data.label}' id='${data.id}'>
<button class='submit'>Submit Form</button>
</div> 
`;
$('.container').append(template);
}


var form = $.ajax({
url :formUrl,
dataType:'json', 
method  :'GET'
}).then(function(response){
_.each(response, function(item){
if(item.type ==='text' || item.type ==='tel' || item.type === 'email'){
  console.log(item);
}

})
}());

// _.each(response.object,function)
















}());
