import swal from 'sweetalert';
function demo(){
  console.log('hello');
 var name = document.getElementById('name').value;
 var server_address =document.getElementById('S_add').value;
 console.log(name);
 console.log(server_address);
const url= "https://api-monitor.scrobits.com/api/v1/projects";
var data = {"name": name , "server_url":server_address,"user_id" : 8 };
const params = {
method:'POST',
headers: {"Content-Type":"application/json"},
body : JSON.stringify(data),
}
fetch(url,params).then((response)=>{return response.json();}).then((data)=>{console.log(data)})
 if(fetch(params)){
   swal("Thank you!", "Your data has been stored successfully.", "success");}
   else{
    swal("Sorry!", "Your data was NOT stored successfully.", "error");
  }
 return data;
}
function Form(){
  return (
    <div className="content">
      <form >
        
      
      </form>
      </div>
  );
}
export default Form;