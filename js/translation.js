export function targmanutyunner_berum(lezu, callback) {
    fetch("data/interface-lang.json")
        .then(function(patasxan_1) {
            if (!patasxan_1.ok) {
                throw new Error("Interfeysi fayli sxal");
            }
            return patasxan_1.json();
        })
        .then(function(lezu_tvyalner) {
            var targmanutyun = lezu_tvyalner[lezu];
            var tarber_elementner = document.querySelectorAll("[data-i18n]");

            tarber_elementner.forEach(function(element) {
                var banali = element.getAttribute("data-i18n");
                if (targmanutyun[banali]) {
                    element.innerHTML = targmanutyun[banali];
                }
            });

            var placeholder_elementner = document.querySelectorAll("[data-i18n-placeholder]");
            placeholder_elementner.forEach(function(el_ph) {
                var banali_ph = el_ph.getAttribute("data-i18n-placeholder");
                if (targmanutyun[banali_ph]) {
                    el_ph.placeholder = targmanutyun[banali_ph];
                }
            });
            if (callback) {
                callback(targmanutyun);
            }
        })
        .catch(function(sxal_1) {
            console.log("Interfeysi berman sxal");
        });
}