import Options from "./options";

class Lib{
    constructor(options:Options){
        console.log("It works!");
        console.log(options.message);
    }
}

export default Lib;