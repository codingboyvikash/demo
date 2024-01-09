// Fetch User Details
function referalId() {
    var referalID = $(".form-control.userdtl").val();
    $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { referalIDforonlyName: referalID },
        success: function(data) {

            if ($.trim(data) == "0") {
                $(".sponsor").text("SPONSOR NOT VALID");
                $("#sponsor").val('');
            } else {
                $("#sponsor").val(data);
                $(".sponsor").text(" Sponsor is : " + data);
            }
        }
    });
};

// %%%%%%%%%%%%%%%% Active InActive User Show For Activation %%%%%%%%%%%%
function activeUser() {
    var activeUsers = $(".form-control.actuser").val();

    $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { activeUser: activeUsers },
        success: function(data) {

            if ($.trim(data) == "0") {
                $(".sponsor").text("User Not Exist..!");
                $("#sponsonValid").val(0);
            } else {
                $(".sponsor").text(" User name is : " + data);
                $("#sponsonValid").val(1);
            }
        }
    });
};
// %%%%%%%%%%%%%%%% SHOW pACKAGE %%%%%%%%%%%%
function packageShow() {
    var packageID = $(".form-control.package").val();
    // alert(packageID);
    $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { packageID: packageID },
        success: function(data) {

            if ($.trim(data) == "0") {
                $("#input1").val(0);
            } else {
                $("#input1").val(data);
            }
        }
    });
};

// // %%%%%%%%%%%%%%%% SHOW pACKAGE %%%%%%%%%%%%
function getDiscount() {
    var uAmt = $("#uAmt").val();
    var pkgid = $("#pkgid").val();
   
        $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { uAmt_P: uAmt,
            pkgid_P: pkgid },
        success: function(data) {

            if ($.trim(data) == "0"){
                $("#msg").text("* please select valid package first");
            } else if ($.trim(data) == "2") {
                $("#msg").text("* please fill valid amount");
            } else if($.trim(data) == "3"){
                $("#msg").text("* please fill amount multiple of 100");
            } else if($.trim(data) == "4"){
                $("#msg").text("* please fill amount between this package");
            } else {
                var data = data.split(",");
                $("#discount").val(data[0]);
                $("#payamt").val(data[1]);
            }
        }
    });
};

function onlyusername() {
    var referalID = $(".form-control.actuser").val();

    $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { useronlyName: referalID },
        success: function(data) {

            if ($.trim(data) == "0") {
                $(".sponsor").text("User Not Exist..!");
                $("#sponsor").val('');
            } else {
                $("#sponsor").val(data);
                $(".sponsor").text(" User Name is : " + data);
            }
        }
    });
};

// %%%%%%%%%%%%%%%% SHOW pACKAGE %%%%%%%%%%%%
function packagevalueDis() {
    var packagevaldis = $(".form-control.package").val();

    var disc = 0;
    var payAmt = 0;

    $.ajax({
        type: "POST",
        url: 'ajAction',
        // contentType: "application/json",
        // dataType: 'json',
        data: { packagevaldis: packagevaldis },
        success: function(data) {
            // alert("raj");
            // console.log(response);
            // response = json_decode(data);
            // var pkgAmt = response[0].amount;
            // var funds = response[0].fund;

            var pkgAmt = $.trim(data)
                // pkgAmt = pkgAmt / 2;
                // extradisc = ((pkgAmt * 10) / 100);
            extradisc = 0;
            // if (extradisc>funds){
            //     extradisc=0;
            // }

            pkgAmt1 = pkgAmt - extradisc;

            document.getElementById('exdisc').value = extradisc;
            document.getElementById('discount').value = pkgAmt;
            document.getElementById('payamt').value = pkgAmt1;
        },
        error: function(data) {
            console.log(data);
        }
    });


};


// %%%%%%%%%%%%%% CALCULATION %%%%%%%%%%%%%%%%
function showINR() {

    var totAmt = document.getElementById('input2').value;


    //var disc=0;
    var totAmt2 = (totAmt * 80);



    document.getElementById('output').value = totAmt2;

}

// Fetch Autopool Table Through Ajax
function autoPoolTbl() {
    var AutoPoolID = $(".form-select.pkg").val();
    // alert(AutoPoolID);
    $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { poolID: AutoPoolID },
        success: function(data) {

            // if ($.trim(data) == "0") {
            //     $("#input1").val(0);
            // } else {
                // document.getElementById("#poolData").innerHTML = this.responseText;
                $("#poolData").html(data);
            //      $("#input1").val(data);
            // }
        }
    });
};

function pkgDisc() {
    var pkgID = $(".form-select.package").val();
    $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { pkgid: pkgID },
        success: function(data) {

            if ($.trim(data) == "0") {
                $(".discountShow").text("Invalid Package Select");
                } else {
                $(".discountShow").text(" Pay Amount : " + data);
            }
        }
    });
};


function copyMyLink() {
    // Get the text field
    var copyText = document.getElementById("myInput");
    const btn = document.getElementById('mBtn');
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // btn.addEventListener('click', function handleClick() {
        btn.textContent = 'Link Copied';
    //   });

  }


//   Show Epin And Show Epin Discount

function epinDiscShow() {
    var pkgID = $('#pkgid').val();
    var pinValue = $('#input2').val();
    $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { get_pin_disc: pkgID,
                totPin: pinValue},
        success: function(data) {
            if ($.trim(data) == "0") {
                $("#payAmt").val(0);
            } else {
                var data = data.split(",");
                $("#totAmt").val(data[0]);
                $("#discAmt").val(data[1]);
                $("#payAmt").val(data[2]);
            }
        }
    });
};

function epinShow() {
    var epinshowid = $(".form-control.package").val();
    $.ajax({
        url: 'ajAction',
        type: "POST",
        data: { epinshowid: epinshowid },
        success: function(data) {

            if ($.trim(data) == "0") {
                $("#input1").val(0);
            } else {
                $("#input1").val(data);
            }
        }
    });
};

// New Code 2024
let a, b, c, submitContent, captcha, locked, validSubmit = false, timeoutHandle;

function generateCaptcha() {
  a = Math.ceil(Math.random() * 10);
  b = Math.ceil(Math.random() * 10);
  c = a + b;
  submitContent = `<span>${a}</span> + <span>${b}</span> = <input class="submit__input" type="text" maxlength="2" size="2" required />`;
  $('.submit__generated').html(submitContent);
  init();
}

function checkCaptcha() {
  if (captcha === c) {
    $('.submit__generated')
      .removeClass('unvalid')
      .addClass('valid');
    $('.submit').removeClass('overlay');
    $('.submit__overlay').fadeOut('fast');

    $('.submit__error').addClass('hide');
    $('.submit__error--empty').addClass('hide');
    validSubmit = true;
    $('form').off('submit').submit();
  } else {
    if (captcha === '') {
      $('.submit__error').addClass('hide');
      $('.submit__error--empty').removeClass('hide');
    } else {
      $('.submit__error').removeClass('hide');
      $('.submit__error--empty').addClass('hide');
    }
    $('.submit__generated')
      .removeClass('valid')
      .addClass('unvalid');
    $('.submit').addClass('overlay');
    $('.submit__overlay').fadeIn('fast');
    validSubmit = false;
  }
  return validSubmit;
}

function unlock() {
  locked = false;
}

$('.submit__control i.fa-refresh').on('click', function() {
  if (!locked) {
    locked = true;
    setTimeout(unlock, 500);
    generateCaptcha();
    setTimeout(checkCaptcha, 0);
  }
});

function init() {
  $('form').off('submit').on('submit', function(e) {
    e.preventDefault();
    if ($('.submit__generated').hasClass('valid')) {
      captcha = $('.submit__input').val();
      if (captcha !== '') {
        captcha = Number(captcha);
      }
      checkCaptcha();
    } else {
      return false;
    }
  });

  $('.submit__input').on('propertychange change keyup input paste', function() {
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(function() {
      captcha = $('.submit__input').val();
      if (captcha !== '') {
        captcha = Number(captcha);
      }
      checkCaptcha();
    }, 150);
  });

  $('body')
    .on('keydown', function(e) {
      if (e.which === 13) {
        if ($('.submit-form').hasClass('overlay')) {
          checkCaptcha();
        } else {
          $('.submit-form').addClass('enter-press');
        }
      }
    })
    .on('keyup', function(e) {
      if (e.which === 13) {
        $('.submit-form').removeClass('enter-press');
      }
    });

  $('.submit-control i.bx-refresh').on('click', function() {
    if (!locked) {
      locked = true;
      setTimeout(unlock, 500);
      generateCaptcha();
      setTimeout(checkCaptcha, 0);
    }
  });

  $('.submit-form-overlay').on('click', function() {
    checkCaptcha();
  });
}

generateCaptcha();
