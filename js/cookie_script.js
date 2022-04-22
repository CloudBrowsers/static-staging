// Create cookie
function setConcent() {
    localStorage.setItem("user_consent", true);
}

// Set cookie consent
function acceptConsent(){
    setConcent();
    document.getElementById("consentNotice").style.display = "none";
}

//set visibility of the cookies consent popup/
let consent = localStorage.getItem("user_consent");
if(consent == "true"){
    document.getElementById("consentNotice").style.display = "none";
}else{
    document.getElementById("consentNotice").style.display = "block";
}