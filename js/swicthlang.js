// detect and apply.
switch(localStorage.getItem("lang")){
    case 'en':
        window.location.href = "../en/index.html";
        break
    case 'es':
        window.location.href = "../es/index.html";
        break
    case 'fr':
        console.log("on a coché FR fils !")
        break
}