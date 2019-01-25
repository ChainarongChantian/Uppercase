function greet(name) {
    if(name == null) {
        return "Hello, my friend.";
    }
    if(Array.isArray(name)) {
        var res;
        for(var i=0;i<name.length;i++) {
            res = name[i] == name[i].toUpperCase();
            if(res == true) {
                capUpper = name[i];
                break;
            }    
        }
        if(res == true) {
            var res = name.join(" ");
            var t = res.split(capUpper);
            return `Hello, ${t}`;
        }
        else if(res == false) {
            if(name.length > 2) {
                var nmfirst = name.slice(0,2).join(", ")+",";
                var nmlast = name.slice(2,3);
                return `Hello, ${nmfirst} and ${nmlast}.`;
            }
            else if(name.length == 2){
                var nm = name.join(" and ");
                return `Hello, ${nm}.`;
            }
        }
    }
    if(name == name.toUpperCase()) {
        return `Hello, ${name}!`;
    }
    return `Hello, ${name}.`;
}

module.exports = greet;
