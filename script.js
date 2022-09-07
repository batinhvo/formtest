const btnPrimary = document.getElementById('btn-primary');

btnPrimary.addEventListener('click', function () {
  Array.from(inputEles).map((ele) =>
  ele.classList.remove('success', 'error')
  );
  let isValid = checkValidate();

  if (isValid) {
  alert('Gửi đăng ký thành công');
  }
});

// Validate data in input and highlight cells
function checkValidate() {
    // Access to input cells
    const firstname = document.getElementById('id_first_name');
    const lastname = document.getElementById('id_last_name');
    const birthday = document.getElementById('id_birthday');
    const gender = document.getElementById('id_gender');
    const identity = document.getElementById('id_cart');
    const username = document.getElementById('id_username');
    const password = document.getElementById('id_password');
    const email = document.getElementById('id_email');
    const phone = document.getElementById('id_phone');
    const city = document.getElementById('id_city');
    //const region = document.getElementById('id_region');
    //const postal = document.getElementById('id_postal');
    const nationality = document.getElementById('id_nationality');
    const company = document.getElementById('id_company');
    const job = document.getElementById('id_job');
    const comments = document.getElementById('id_comments');

    let firstnameValue = firstname.value;
    let lastnameValue = lastname.value;
    let birthdayValue = birthday.value;
    let genderValue = gender.value;
    let identityValue = identity.value;
    let passwordValue = password.value;
    let emailValue = email.value;
    let phoneValue = phone.value;
    let cityValue = city.value;
    //let regionValue = region.value;
    //let postalValue = postal.value;
    let nationalityValue = nationality.value;
    let companyValue = company.value;
    let jobValue = job.value;
    let commentsValue = comments.value;
    let usernameValue = username.value;

    let isCheck = true;

    // check email
    if (emailValue == '') {
        setError(email, 'The email cannot be left blank');
        isCheck = false;
        document.getElementById('color_11').style.opacity = "1";
    } else if (!isEmail(emailValue)) {
        setError(email, 'Email is not properly formatted');
        isCheck = false;
        document.getElementById('color_11').style.opacity = "1";
    } else {
        setSuccess(email);
    }

    // check phone
    if (phoneValue == '') {
      setError(phone, 'The phone cannot be left blank');
      isCheck = false;
      document.getElementById('color8').style.opacity = "1";
  } else if (!isPhone(phoneValue)) {
      isCheck = false;
      setError(phone, 'Phone is not properly formatted');
      document.getElementById('color8').style.opacity = "1";
  } else {
      setSuccess(phone);
  }


    // check firstname
    if (firstnameValue == '') {
        setError(firstname, 'The first name cannot be left blank');
        isCheck = false;
        document.querySelector(".cola").style.opacity = "1";
    } else {
        setSuccess(firstname);
        //document.getElementById('color').style.opacity = "";
    }

    // check lasttname
    if (lastnameValue == '') {
      setError(lastname, 'The last name cannot be left blank');
      isCheck = false;
      document.getElementById('color1').style.opacity = "1";
    } else {
        setSuccess(lastname);
    }

     // check birthday
     if (birthdayValue == '') {
      setError(birthday, 'The birth day cannot be left blank');
      isCheck = false;
      document.getElementById('color2').style.opacity = "1";
    } else {
        setSuccess(birthday);
    }

     // check gender
     if (genderValue == '') {
      setError(gender, 'The gender cannot be left blank');
      isCheck = false;
      document.getElementById('color12').style.opacity = "1"
    } else {
        setSuccess(gender);
    }

     // check identity
     if (identityValue == '') {
      setError(identity, 'The identity cannot be left blank');
      isCheck = false;
      document.getElementById('color4').style.opacity = "1"
    } else {
        setSuccess(identity);
    }

     // check username
     if (usernameValue == '') {
      setError(username, 'The username cannot be left blank');
      isCheck = false;
      document.getElementById('color5').style.opacity = "1"
    } else {
        setSuccess(username);
    }

     // check password
     if (passwordValue == '') {
      setError(password, 'The password cannot be left blank');
      isCheck = false;
      document.getElementById('color6').style.opacity = "1"
    } else {
        setSuccess(password);
    }

     // check city
     if (cityValue == '') {
      setError(city, 'The city cannot be left blank');
      isCheck = false;
      document.getElementById('color27').style.opacity = "1"
    } else {
        setSuccess(city);
    }

     // check region
    //  if (regionValue == '') {
    //   setError(region, 'The region cannot be left blank');
    //   isCheck = false;
    //   document.getElementById('color10').style.opacity = "1"
    // } else {
    //     setSuccess(region);
    // }

     // check postal
    //  if (postalValue == '') {
    //   setError(postal, 'The postal cannot be left blank');
    //   isCheck = false;
    //   document.getElementById('color155').style.opacity = "1"
    // } else {
    //     setSuccess(postal);
    // }

     // check nationality
     if (nationalityValue == '') {
      setError(nationality, 'The nationality cannot be left blank');
      isCheck = false;
      document.getElementById('color122').style.opacity = "1"
    } else {
        setSuccess(nationality);
    }

     // check company
     if (companyValue == '') {
      setError(company, 'The company cannot be left blank');
      isCheck = false;
      document.getElementById('color111').style.opacity = "1"
    } else {
        setSuccess(company);
    }

    // check job
    if (jobValue == '') {
      setError(job, 'The job cannot be left blank');
      isCheck = false;
      document.getElementById('color13').style.opacity = "1"
    } else {
        setSuccess(job);
    }
    
     // check comments
     if (commentsValue == '') {
      setError(comments, 'The comments cannot be left blank');
      isCheck = false;
      document.getElementById('color13').style.opacity = "1";
    } else {
        setSuccess(comments);
    }

  
    return isCheck;
}

function setError(ele, message) {
  let parentEle = ele.parentNode;
  parentEle.classList.add('error');
  parentEle.querySelector('small').innerText = message;
}

function setSuccess(ele) {
  ele.parentNode.classList.add('success');

}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
  );
}

function isPhone(number) {
  return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
