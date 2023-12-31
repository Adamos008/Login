$("#showPassword").on("click", (e) => {
    //Po kliknutí po prvé přidá class hidden po drůhém kliknutí jí zase odebere
    $(e.currentTarget).toggleClass("hidden")

    //Zobrazení textu > změna z typu password na typ text a obráceně
    let passwordField = $("#passwordField");
    let fieldType = passwordField.attr('type');
    if(fieldType === 'password'){
        passwordField.attr('type', 'text');
    }else{
        passwordField.attr('type', 'password')
    }
});

$("[name=button-login]").on("click", (e) =>{
    e.preventDefault();

    let username = $("[name=username-value]").val();
    let password = $("[name=password-value]").val();
    alert(`Sucefully logend in: Username: ${username}, Password: ${password}`);
});