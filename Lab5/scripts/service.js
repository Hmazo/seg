
var error = {
    "creditcardError":"Le numéro de carte de crédit doit contenir 16 chiffres.",
    "emptycreditcardError":"Le numéro de carte de crédit doit contenir au moins un caractère.",
    "inputphoneError":"Le numéro de téléphone doit contenir 10 chiffres.",
    "inputfnameError":"Le prénom doit contenir au moins un caractère.",
    "inputlnameError":"Le nom de famille doit contenir au moins un caractère.",
    "inputEmailError":"Mauvais format d'e-mails.",
    "emptyinputphoneError":"Le numéro de téléphone doit contenir au moins un numéro.",
    "emptyinputEmailError":"L'e-mail doit contenir au moins un caractère.",
    "emptydate":"Champ de date vide."
}
var currentUser = {}
var selectedService;
var servicePrice;
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";
var toggled;
toggled = false;




var availabilityMessage = {
  "Richard Azzouz":["Veuillez noter que le Dr Richard n'est disponible que les Lundi et les  Mardis.", 1,2],
  "Leona":["Veuillez noter que le Dr Leona n'est disponible que les Mercredi et les  Jeudis.",3,4],
  "Kai'sa":["Veuillez noter que le Dr Kai'sa n'est disponible que les Jeudi et les  Vendredi.",4,5]

}


var selectedDate;
var selectedExp;





// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits


    var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  var digits = a.replace(/\D/g, "");
  return phoneRe.test(digits);

}

function validateInputEmail(email) {
    var a = document.getElementById(email).value;
    var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)


function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0 || date.getDay() === 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

  $('#inputerror').toggle('hide')
  $('#inputerror1').toggle('hide')
  $('#success').toggle('hide')
  $('#paiement').toggle('hide')


  var selectedExpert = $("#inputExpert option:selected" ).text();
  document.querySelector("#availability").innerHTML = availabilityMessage[selectedExpert][0];

  var selectedExpert = $("#inputExpert option:selected" ).text();
      document.querySelector("#availability").innerHTML = availabilityMessage[selectedExpert][0]
      document.querySelector("#inputExpert").onchange = () => {
          var selectedExpert = $("#inputExpert option:selected" ).text();
          document.querySelector("#availability").innerHTML = availabilityMessage[selectedExpert][0]
          $("#dateInput").datepicker("destroy");
          document.querySelector("#dateInput").value="";
          $('#dateInput').datepicker({
              dateFormat: setDateFormat,
              // no calendar before June 1rst 2020
              minDate: new Date('06/01/2020'),
              maxDate: '+4M',
              // used to disable some dates
              beforeShowDay: disableDates,
              beforeShowDay: function(day) {
                  var day = day.getDay();
                  if (day == availabilityMessage[selectedExpert][1] || day == availabilityMessage[selectedExpert][2]) {
                      return [true, "somecssclass"]
                  } else {
                      return [false, "someothercssclass"]
                  }
               }
            });
      }

      $('#dateInput').datepicker({
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: disableDates,
        beforeShowDay: function(day) {
            var day = day.getDay();
            if (day == 1 || day == 2) {
                return [true, "somecssclass"]
            } else {
                return [false, "someothercssclass"]
            }
         }
      });

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});


function ExpertAvailabi(number){
  var selectedExpert = $("#inputExpert option:selected" ).text();
  document.querySelector("#availability").innerHTML = availabilityMessage[selectedExpert][0];

  $('#dateInput').datepicker({
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/27/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: disableDates,
            beforeShowDay: function(day) {
                var day = day.getDay();
                if (day == availabilityMessage[selectedExpert][1] || day == availabilityMessage[selectedExpert][2]) {
                    return [true, "somecssclass"]
                } else {
                    return [false, "someothercssclass"]
                }
             }
          });

}



function validateInputs(){
  var  errorMessage = "";

  if(document.querySelector("#inputfname").value === ""){

      errorMessage += `* ${error['inputfnameError']}<br/>`
      console.log(errorMessage);

    }

  if(document.querySelector("#inputlname").value === ""){
     errorMessage += `* ${error['inputlnameError']}<br/>`
     console.log(errorMessage);

}
  if(document.querySelector("#dateInput").value === ""){ errorMessage += `* ${error['emptydate']}<br/>`}
  if($("#inputEmail").val === ""){ errorMessage += `* ${error['emptyinputEmailError']}<br/>`}
  else if (!validateInputEmail("inputEmail")){ errorMessage += `* ${error['inputEmailError']}<br/>`}
  if($("#inputphone").val === ""){ errorMessage += `* ${error['emptyinputphoneError']}<br/>`
  console.log(errorMessage);
 }
  else if (!validatePhone("inputphone")){ errorMessage += `* ${error['inputphoneError']}<br/>`}

  console.log(errorMessage);

  if (errorMessage === "") {
        selectedDate = document.querySelector("#dateInput").value;
        selectedExp = $("#inputExpert option:selected" ).text();
        $('#paiement').toggle('show')
        document.getElementById('paiement').scrollIntoView();
        if(toggled){
            $('#inputerror').toggle('show')
            toggled = !toggled;
        }
    } else {
        if(toggled){
            $('#inputerror').toggle('show')

        }
        else {
            $('#inputerror').toggle('show')
            toggled = !toggled;
        }
        $('#paiement').toggle('hide')
        document.querySelector('#errorContent').innerHTML = errorMessage;

    }

}

function validateCreditCardNumber(number){
    var a = document.getElementById(number).value;
    var filter = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}



function validatePayment(){
    //TODO:
    var  errorMessage = "";
    if($("#debit").val === ""){ errorMessage += `* ${error['emptycreditcardError']}<br/>`}
    else if(!validateCreditCardNumber("debit")){errorMessage += `* ${error['creditcardError']}<br/>`}
    if (errorMessage === "") {
         var validationMessage = " Votre rendez vous a ete reserve avec succès pour le  " + selectedDate + "  avec le dr "+selectedExp;
        document.querySelector('#success').innerHTML = validationMessage;
        $('#success').toggle('show')
        if(toggled){
            $('#inputerror1').toggle('show')
            toggled = !toggled;
        }
    } else {
        if(toggled){
            $('#inputerror1').toggle('show')
            $('#inputerror1').toggle('show')
        }
        else {
            $('#inputerror1').toggle('show')
            toggled = !toggled;
        }
        document.querySelector('#errorContent1').innerHTML = errorMessage;
        document.querySelector('#inputerror1').scrollIntoView(false)
    }
}
