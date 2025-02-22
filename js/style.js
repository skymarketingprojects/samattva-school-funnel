function openPopup() {
    // Show the popup
    document.getElementById("popup_box").style.display = "block";

    // Optionally scroll to the top of the page when the popup opens
    window.scrollTo(0, 0);
}

function closePopup() {
    // Hide the popup
    document.getElementById("popup_box").style.display = "none";
}

function validateBasicDetails() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;

    var hasError = false;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("contactError").innerHTML = "";

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        hasError = true;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        hasError = true;
    }

    if (contact === "" || isNaN(contact) || contact.length !== 10) {
        document.getElementById("contactError").innerHTML = "Please enter a valid 10-digit mobile number";
        hasError = true;
    }

    return !hasError;
}

function validateForm(event) {
    var isBasicDetailsValid = validateBasicDetails();
    if (isBasicDetailsValid) {
        // Form validation passed (this part can be further extended if needed)
        // alert("Form is valid. You can submit the data.");
        // closePopup();  // Close the popup after validation (optional)
        // event.preventDefault();
        // window.location.href = "https://samattvaschool.netlify.app/thankyou.html";
    }
    console.log("form filled");
}

function initAutocomplete() {
    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            console.log("No details available for input: '" + place.name + "'");
            return;
        }
        var city = "";
        var state = "";
        place.address_components.forEach(function (component) {
            if (component.types.includes('locality')) {
                city = component.long_name;
            } else if (component.types.includes('administrative_area_level_1')) {
                state = component.long_name;
            }
        });

        document.getElementById('city').value = city;
        document.getElementById('state').value = state;
        document.querySelector('.suggest').style.display = 'flex';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initAutocomplete();
});
