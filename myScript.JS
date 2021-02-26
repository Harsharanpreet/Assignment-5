function ValidateForm()
{
    var x =document.forms["myForm"]["frame"].value ;
    if (x=="")
    {
        alert("Name must be filled out there")
        return false ;
    }
}