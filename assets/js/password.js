function passWord() {
    var testV = 1;
    var pass1 = prompt('🌹Please Enter The Password:','');
    while (testV < 3) {
        if (!pass1) history.go(-1);
        if (pass1.toLowerCase() == "iamuseless") {
            alert('✅ Password Matched!');
            window.close("https://jddevelopp.github.io/photogallery/")
            window.open('https://jddevelopp.github.io/photogallery/home.html');
            break;
        } 
        testV+=1;
        var pass1 = prompt('❌ Access Denied - Incorrect Password, Please Try Again.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3) history.go(-1);
    return "";
}