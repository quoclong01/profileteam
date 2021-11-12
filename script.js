const clickSubmit = (event) => {
  event.preventDefault();
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const mess = document.getElementById("mess");
  if (!fname.value || !lname.value || !email.value || !subject.value) {
    alert("Chưa nhập đủ dữ liệu");
  } else {
    if (ValidateEmail(email.value)) {
      alert("Dữ liệu đã được submit");
    } else {
      alert("Email không hợp lệ. Vui lòng nhập lại");
    }
  }
};

function ValidateEmail(value) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true;
  }

  return false;
}
