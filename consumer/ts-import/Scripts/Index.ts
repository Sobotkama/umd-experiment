import * as $ from "jquery";
import Lib from "library";

$(()=>{
    console.log("creating lib instance.");
    new Lib({message:"example message here"});
});