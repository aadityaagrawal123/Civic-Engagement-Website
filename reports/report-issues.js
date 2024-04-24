$(document).ready(function () {
    displayForm();
})

$(function () {
    $("#submit-btn").click(function () {
        submitReport()
    })
} )

function displayForm () {
    // Setting the max date
    var d = new Date() 
    var dd = d.getDate();
    var mm = d.getMonth();
    var yyyy = d.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
     }
     
     if (mm < 10) {
        mm = '0' + mm;
     } 
    var date = `${yyyy}-${mm}-${dd}`
    $("#birthdate").attr("max",date);

}

function submitReport() {

    var fname = $("#firstName").val();
    var lname = $("#lastName").val();
    var photo = $("#photo").val();
    var email = $("#emailId").val();
    var phone = $("#phoneNumber").val();
    var birth = $("#birthdate").val();
    var address = $("#address").val();
    var pincode = $("#pincode").val();
    var issueType = $("#issueType").val();
    var issue = $("#description").val();
    
    if ((fname == "" || fname == null || fname == " " ) ||
        (lname == "" || lname == null || lname == " " ) ||
        (photo == "" || photo == null || photo == " " ) ||
        (email == "" || email == null || email == " " ) ||
        (phone == "" || phone == null || phone == " " ) ||
        (birth == "" || birth == null || birth == " " ) ||
        (address == "" || address == null || address == " " ) ||
        (pincode == "" || pincode == null || pincode == " " ) ||
        (issueType == "" || issueType == null || issueType == " " ) ||
        (issue == "" || issue == null || issue == " " )
    ){
        alert("Please fill out all the fields!");
    }
    else{
        alert(`Your Report submitted successfully! We will look into this issue soon`);
        location.href = `https://aadityaagrawal123.github.io/Civic-Engagement-Website/main-page.html`
    }
}
