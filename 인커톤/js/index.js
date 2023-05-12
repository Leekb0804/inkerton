function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var major = document.getElementById("major").value;
  
    console.log("이름: " + name);
    console.log("나이: " + age);
    console.log("성별: " + gender);
    console.log("학과: " + major);
  
    // 입력 값을 처리하는 코드를 작성
  }
  