function passWord() {
    var testV = 1;
    var pass1 = prompt('🌹Please Enter Your First Name Only (Case Sensitive):','');
    while (testV < 3) {
        if (!pass1) history.go(-1);
        if (pass1.toLowerCase() == "jagrata") {
            alert('✅ Password Matched!');
            window.close("https://jddevelopp.github.io/photogallery/")
            window.open('https://jddevelopp.github.io/photogallery/home.html');
            break;
        }
        if (pass1.toLowerCase() == "siddharth") {
            alert('✅ Password Matched!');
            window.close("https://jddevelopp.github.io/photogallery/")
            window.open('https://jddevelopp.github.io/photogallery/home.html');
            break;
        }
        if (pass1.toLowerCase() == "radhika") {
            alert('✅ Password Matched!');
            window.close("https://jddevelopp.github.io/photogallery/")
            window.open('https://jddevelopp.github.io/photogallery/home.html');
            break;
        } 
        if (pass1.toLowerCase() == "shreya") {
            alert('✅ Password Matched!');
            window.close("https://jddevelopp.github.io/photogallery/")
            window.open('https://jddevelopp.github.io/photogallery/home.html');
            break;
        } 
        if (pass1.toLowerCase() == "yashoda") {
            alert('✅ Password Matched!');
            window.close("https://jddevelopp.github.io/photogallery/")
            window.open('https://jddevelopp.github.io/photogallery/home.html');
            break;
        } 
        testV+=1;
        var pass1 = prompt('❌ Access Denied - This name is not registered for access. Contact Jagrata for getting your name registered.','Password');
    }
    if (pass1.toLowerCase()!="password" & testV ==3) history.go(-1);
    return "";
}