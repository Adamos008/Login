$("[name=button-send]").on("click", (e) =>{
    e.preventDefault();
    console.log("a")

    let email = $("[name=email]").val();
    console.log(email);

    alert("Password recovery send on: " + email);
});