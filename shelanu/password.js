var pass45 = null;
var pass1="shelanu";
alert('חכה/י לטעינת האתר');
password();
function password(){
    var x = 0;
    while (x<=3){
        x++;
        pass45=prompt('הקש\י את סיסמת האתר:','');
        if (pass45==pass1){
            alert('הקש\י על כפתור הOK לפתיחת האתר');
            x=10;
            window.location="file:///C:/Users/%D7%9E%D7%A9%D7%AA%D7%9E%D7%A9/Desktop/RoyKaganEvents.github.io/shelanu/main%20copy.html";
        }
        else{
            
            alert('הסיסמה שגויה');
            if (x==3){
                alert('את/ה לא יכול להכנס לאתר');
                window.location="http://www.google.com";
                break
                
            }
        }
    }
}

    