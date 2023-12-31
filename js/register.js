$("#showPassword1").on("click", (e) => {
    //Po kliknutí po prvé přidá class hidden po drůhém kliknutí jí zase odebere
    $(e.currentTarget).toggleClass("hidden")

    //Zobrazení textu > změna z typu password na typ text a obráceně
    let passwordField = $("#passwordField1");
    let fieldType = passwordField.attr('type');
    if(fieldType === 'password'){
        passwordField.attr('type', 'text');
    }else{
        passwordField.attr('type', 'password')
    }
});

$("#showPassword2").on("click", (e) => {
    //Po kliknutí po prvé přidá class hidden po drůhém kliknutí jí zase odebere
    $(e.currentTarget).toggleClass("hidden")

    //Zobrazení textu > změna z typu password na typ text a obráceně
    let passwordField = $("#passwordField2");
    let fieldType = passwordField.attr('type');
    if(fieldType === 'password'){
        passwordField.attr('type', 'text');
    }else{
        passwordField.attr('type', 'password')
    }
});


$("[name=button-register]").on("click", (e) => {
    e.preventDefault();

    let username = $("[name=username-value]").val();
    let password = $("[name=password-value]").val();
    let passwordConfirm = $("[name=password-confirm-value]").val();

    if(passwordConfirm == password){
        alert(`Successfully registered. Username: ${username}, Password: ${password}`);
    }else{
        alert("The passwords do not match.");
    }
});