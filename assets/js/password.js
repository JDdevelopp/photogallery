function passWord() {
    var testV = 1;
    var pass1 = prompt('๐นPlease Enter Your First Name Only (Case Sensitive):','');
    while (testV < 3) {
        if (!pass1) history.go(-1);
        if (pass1.toLowerCase() == "jagrata") {
            alert('โ Password Matched!');
            window.location.replace("https://jddevelopp.github.io/photogallery/home.html");
            break;
        }
        if (pass1.toLowerCase() == "siddharth") {
            alert('โ Password Matched!');
            window.location.replace("https://jddevelopp.github.io/photogallery/home.html");
            break;
        }
        if (pass1.toLowerCase() == "radhika") {
            alert('โ Password Matched!');
            window.location.replace("https://jddevelopp.github.io/photogallery/home.html");
            break;
        } 
        if (pass1.toLowerCase() == "shreya") {
            alert('โ Password Matched!');
            window.location.replace("https://jddevelopp.github.io/photogallery/home.html");
            break;
        } 
        if (pass1.toLowerCase() == "yashoda") {
            alert('โ Password Matched!');
            window.location.replace("https://jddevelopp.github.io/photogallery/home.html");
            break;
        } 
        testV+=1;
        var pass1 = prompt('โ Access Denied - This name is not registered for access. Contact Jagrata for getting your name registered.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3) history.go(-1);
    return "";
}