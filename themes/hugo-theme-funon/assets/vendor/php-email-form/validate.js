/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.sign-up-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      let email = document.getElementById("email-input").value;
      console.log('email:' + JSON.stringify(email));

      if(!email){
        displayError("email must not null !!");
        return;
      }
      displaySuccess(email + 'has been recorded');
    });
  });

  function displayError(error) {
      const toastLiveExample = document.getElementById('liveToast')
      toastLiveExample.setAttribute("class", "toast align-items-center text-bg-danger border-0");
      const toastbodydiv = document.getElementById('toast-body');
      toastbodydiv.innerHTML = '' + error;
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
  }

  function displaySuccess(msg) {
      const toastLiveExample = document.getElementById('liveToast')
      toastLiveExample.setAttribute("class", "toast align-items-center text-bg-primary border-0");
      const toastbodydiv = document.getElementById('toast-body');
      toastbodydiv.innerHTML = '' + msg;
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastBootstrap.show();
  }
})();
