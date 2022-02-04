import Options from "./options";

export default class Lib{
    constructor(options:Options){
        console.log("It works!");
        console.log(options.message);
    }
}