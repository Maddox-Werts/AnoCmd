var hasAuth = false;

function sendMSG(){
    var outputbox = document.getElementById("output");
    var inptbx = document.getElementById("cmdtext");
    var erbox = document.getElementById("ERROR");
    outputbox.innerText = "EXECUTED COMMAND >> " + inptbx.value;

    var cmd = inptbx.value;
    var args = cmd.split(" ");
    erbox.innerText = "";
    inptbx.value = "";

    if(cmd == "clear"){
        outputbox.innerText = "";
        return;
    }
    if(cmd == "ban"){
        if(!hasAuth){
            outputbox.innerText = "Failed";
            erbox.innerText = "YOU DON'T HAVE AUTH!";
            return;
        }
        else{
            outputbox.innerText = "SENT A REQUEST TO THE OWNERS EMAIL :/";
            return;
        }
    }
    if(args[0] == "login"){
        if(args[1] != null && args[2] != null){
            if(args[1] == "admin" && args[2] == "ROOT"){
                console.log("Success!!");
                outputbox.innerText = "LOGIN SUCCESSFUL. YOU ARE NOW ADMIN";
                hasAuth = true;
            }
            else{
                console.log("USER DOES NOT EXIST!");
                erbox.innerText = "USER DOES NOT EXIST!";
            }
        }
        else{
            console.log("!INCORRECT ARGUMENTS!");
            erbox.innerText = "!INCORRECT ARGUMENTS!"
        }

        return;
    }
    if(cmd == "help"){
        outputbox.innerText = "help | clear | ban | login [USERNAME] [PASSWORD]";
        return;
    }

    else{
        erbox.innerText = "UNKNOWN COMMAND >> " + cmd;
    }
}

function clearCNSL(){
    var inptbx = document.getElementById("cmdtext");
    inptbx.value = "";
}