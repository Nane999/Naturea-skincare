export function apranqner_berum(lezu, targmanutyun) {
    fetch("api/products.json")
        .then(function (patasxan_2) {
            if (!patasxan_2.ok) {
                throw new Error("Apranqneri fayli sxal");
            }
            return patasxan_2.json();
        })
        .then(function (apranq_tvyalner) {

            var karteri_dasht = document.querySelector(".kart-grid");
            if (karteri_dasht) {
                var kategorianer = apranq_tvyalner.categories;
                var html_tekst_1 = [];

                kategorianer.forEach(function (kategoria) {
                    html_tekst_1.push(
                        '<div class="kart-item">' +
                            '<div class="kart-nkar-box">' +
                                '<img src="images/' + kategoria.image + '" alt="' + kategoria.name[lezu] + '" class="kart-nkar">' +
                            '</div>' +
                            '<div class="kart-text-tox">' +
                                '<span>' + kategoria.name[lezu] + '</span>' +
                                '<span class="kategoria-slaq">→</span>' +
                            '</div>' +
                        '</div>'
                    );
                });
                karteri_dasht.innerHTML = html_tekst_1.join("");
            }

            var noruytneri_dasht = document.querySelector(".aprili-grid");
            if (noruytneri_dasht) {
                var noruytner = apranq_tvyalner.arrivals;
                var html_tekst_2 = [];

                noruytner.forEach(function (apranq) {
                    html_tekst_2.push(
                        '<div class="nor-kart-item">' +
                            '<i class="fa-regular fa-heart sirt-ikonka"></i>' +
                            '<div class="nor-nkar-box">' +
                                '<img src="images/' + apranq.image + '" alt="' + apranq.title[lezu] + '" class="nor-nkar">' +
                            '</div>' +
                            '<p class="aprili-anun">' + apranq.title[lezu] + '</p>' +
                            '<p class="aprili-gn">' + apranq.price + '</p>' +
                            '<a href="#" class="gnel-baton">' + targmanutyun.cartBtn + '</a>' +
                        '</div>'
                    );
                });
                noruytneri_dasht.innerHTML = html_tekst_2.join("");
            }

        })
        .catch(function (sxal_2) {
            console.log("Apranqneri berman sxal:", sxal_2);
        });
}