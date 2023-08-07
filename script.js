function cout() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const yearOfBirth = 2023-parseInt(document.getElementById("birthyear").value, 10);
    const englishLevel = parseFloat(document.getElementById("ielts").value);

    const student = {
        firstname: firstName,
        lastname: lastName,
        age: yearOfBirth,
        ielts: englishLevel,
    };

    // Displaying the student information
    const output = `
    <div class="card">
      <h2>First Name: ${student.firstname}</h2>
      <h2>Last Name: ${student.lastname}</h2>
      <h2>Age: ${student.age}</h2>
      <h2>IELTS Score: ${student.ielts}</h2>
    </div>

    <a href="https://mythrillfiction.com/" target="_blank" >Student</a>
  `;



    document.querySelector('.parent').innerHTML = output;
}
