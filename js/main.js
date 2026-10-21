import { targmanutyunner_berum } from "./translation.js";
import { apranqner_berum } from "./products.js";

var lezu_yntrox = document.getElementById("langSelect");
var pahvac_lezu = localStorage.getItem("siteLang");
var yntacik_lezu;
if (pahvac_lezu) {
    yntacik_lezu = pahvac_lezu;
} else {
    yntacik_lezu = "ru";
}

if (lezu_yntrox) {
    lezu_yntrox.value = yntacik_lezu;
}

function amen_inch_berel(lezu) {
    targmanutyunner_berum(lezu, function(targmanutyun) {
        apranqner_berum(lezu, targmanutyun);
    });
}

if (lezu_yntrox) {
    lezu_yntrox.addEventListener("change", function() {
        yntacik_lezu = lezu_yntrox.value;
        localStorage.setItem("siteLang", yntacik_lezu);
        amen_inch_berel(yntacik_lezu);
    });
}

amen_inch_berel(yntacik_lezu);