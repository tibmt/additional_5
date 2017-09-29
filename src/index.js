module.exports = function check(str, bracketsConfig) {

    function first(bracket, bracketsConfig) {
        let result;
        bracketsConfig = bracketsConfig.forEach((element) => {
            if(bracket == element[0]){
                result = element[1];
            }
        })
        return result;
    }

    function second(str, i, j) {
        return str.slice(0, i) + str.slice(j + 1, str.length);
    }

    if(str.length == 0){
        return false
    }
    if(str.length % 2 != 0){
        return false
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i + 1] === first(str[i], bracketsConfig)) {
            str = second(str, i, i + 1);
            i = -1;
            str.length -= 2;
        }
    }

    return str.length === 0;
};
