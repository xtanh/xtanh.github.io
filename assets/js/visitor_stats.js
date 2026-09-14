(function () {
    "use strict";

    // Label coordinates are derived from Natural Earth's public-domain 1:110m data.
    var countryCoordinates = {"AE":[54.547256,23.466285],"AF":[66.496586,34.164262],"AL":[20.11384,40.654855],"AM":[44.800564,40.459077],"AO":[17.984249,-12.182762],"AQ":[35.885455,-79.843222],"AR":[-64.173331,-33.501159],"AT":[14.130515,47.518859],"AU":[134.04972,-24.129522],"AZ":[47.210994,40.402387],"BA":[18.06841,44.091051],"BB":[-59.568966,13.163709],"BD":[89.684963,24.214956],"BE":[4.800448,50.785392],"BF":[-1.36388,12.673048],"BG":[25.15709,42.508785],"BH":[50.554816,26.055972],"BI":[29.917086,-3.332836],"BJ":[2.352018,10.324775],"BM":[-64.763573,32.296592],"BN":[114.551943,4.448298],"BO":[-64.593433,-16.666015],"BR":[-49.55945,-12.098687],"BS":[-77.146688,26.401789],"BT":[90.040294,27.536685],"BW":[24.179216,-22.102634],"BY":[28.417701,53.821888],"BZ":[-88.712962,17.202068],"CA":[-101.9107,60.324287],"CD":[23.458829,-1.858167],"CF":[20.906897,6.989681],"CG":[15.9005,0.142331],"CH":[7.463965,46.719114],"CI":[-5.568618,7.49139],"CK":[-159.785675,-21.215993],"CL":[-72.318871,-38.151771],"CM":[12.473488,4.585041],"CN":[106.337289,32.498178],"CO":[-73.174347,3.373111],"CR":[-84.077922,10.0651],"CU":[-77.975855,21.334024],"CY":[33.084182,34.913329],"CZ":[15.377555,49.882364],"DE":[9.678348,50.961733],"DJ":[42.498825,11.976343],"DK":[9.018163,55.966965],"DO":[-70.653998,19.104137],"DZ":[2.808241,27.397406],"EC":[-78.188375,-1.259076],"EE":[25.867126,58.724865],"EG":[29.445837,26.186173],"EH":[-12.630304,23.967592],"ER":[38.285566,15.787401],"ES":[-3.464718,40.090953],"ET":[39.0886,8.032795],"FI":[27.276449,63.252361],"FJ":[177.975427,-17.826099],"FK":[-58.738602,-51.608913],"FM":[158.234019,6.887553],"FO":[-7.058429,62.185604],"FR":[2.552275,46.696113],"GA":[11.835939,-0.437739],"GB":[-2.116346,54.402739],"GE":[43.735724,41.870087],"GH":[-1.036941,7.717639],"GL":[-39.335251,74.319387],"GM":[-14.998318,13.641721],"GN":[-10.016402,10.618516],"GQ":[8.9902,2.333],"GR":[21.72568,39.492763],"GS":[-31.063179,-55.683402],"GT":[-90.497134,14.982133],"GU":[144.703614,13.354173],"GW":[-14.52413,12.163712],"GY":[-58.942643,5.124317],"HN":[-86.887604,14.794801],"HR":[16.37241,45.805799],"HT":[-72.224051,19.263784],"HU":[19.447867,47.086841],"ID":[101.892949,-0.954404],"IE":[-7.798588,53.078726],"IL":[34.847915,30.911148],"IN":[79.358105,22.686852],"IO":[71.348349,-6.190826],"IQ":[43.26181,33.09403],"IR":[54.931495,32.166225],"IS":[-18.673711,64.779286],"IT":[11.076907,44.732482],"JM":[-77.318767,18.137124],"JO":[36.375991,30.805025],"JP":[138.44217,36.142538],"KE":[37.907632,0.549043],"KG":[74.532637,41.66854],"KH":[104.50487,12.647584],"KI":[-157.384577,1.820437],"KM":[43.318094,-11.727683],"KP":[126.444516,39.885252],"KR":[128.129504,36.384924],"KW":[47.313999,29.413628],"KZ":[68.685548,49.054149],"LA":[102.533912,19.431821],"LB":[35.992892,34.133368],"LK":[80.704823,7.581097],"LR":[-9.460379,6.447177],"LS":[28.246639,-29.480158],"LT":[24.089932,55.103703],"LU":[6.07762,49.733732],"LV":[25.458723,57.066872],"LY":[18.011015,26.638944],"MA":[-7.187296,31.650723],"MD":[28.487904,47.434999],"ME":[19.143727,42.803101],"MG":[46.704241,-18.628288],"MH":[171.193609,7.082568],"MK":[21.555839,41.558223],"ML":[-2.038455,18.692713],"MM":[95.804497,21.573855],"MN":[104.150405,45.997488],"MP":[145.734397,15.188188],"MR":[-9.740299,19.587062],"MT":[14.433005,35.892886],"MU":[57.565848,-20.299506],"MV":[73.507554,4.174441],"MW":[33.608082,-13.386737],"MX":[-102.289448,23.919988],"MY":[113.83708,2.528667],"MZ":[37.83789,-13.94323],"NA":[17.108166,-20.575298],"NC":[165.084004,-21.064697],"NE":[9.504356,17.446195],"NG":[7.50322,9.439799],"NI":[-85.069347,12.670697],"NL":[5.61144,52.422211],"NO":[9.679975,61.357092],"NP":[83.639914,28.297925],"NR":[166.932644,-0.520261],"NZ":[172.787,-39.759],"OM":[57.336553,22.120427],"PA":[-80.352106,8.72198],"PE":[-72.90016,-12.976679],"PF":[-149.46157,-17.628081],"PG":[143.910216,-5.695285],"PH":[122.465,11.198],"PK":[68.545632,29.328389],"PL":[19.490468,51.990316],"PM":[-56.332352,47.040344],"PN":[-128.317536,-24.364576],"PR":[-66.481065,18.234668],"PS":[35.291341,32.047431],"PT":[-8.271754,39.606675],"PW":[134.580157,7.518252],"PY":[-60.146394,-21.674509],"QA":[51.143509,25.237383],"RO":[24.972624,45.733237],"RS":[20.787989,44.189919],"RU":[44.686469,58.249357],"RW":[30.103894,-1.897196],"SA":[44.6996,23.806908],"SB":[159.170468,-8.029548],"SD":[29.260657,16.330746],"SE":[19.01705,65.85918],"SG":[103.816925,1.366587],"SH":[-5.71262,-15.950487],"SI":[14.915312,46.06076],"SK":[19.049868,48.734044],"SL":[-11.763677,8.617449],"SN":[-14.778586,15.138125],"SO":[45.19238,3.568925],"SR":[-55.91094,4.143987],"SS":[30.390151,7.230477],"ST":[7.021,0.9709],"SV":[-88.890124,13.685371],"SY":[38.277783,35.006636],"SZ":[31.467264,-26.533676],"TC":[-71.752704,21.81663],"TD":[18.645041,15.142959],"TF":[69.122136,-49.303721],"TG":[1.058113,8.80722],"TH":[101.073198,15.45974],"TJ":[72.587276,38.199835],"TL":[125.854679,-8.803705],"TM":[58.676647,39.855246],"TN":[9.007881,33.687263],"TO":[-175.163014,-21.210026],"TR":[34.508268,39.345388],"TT":[-60.9184,10.9989],"TV":[179.209587,-8.513717],"TW":[120.868204,23.652408],"TZ":[34.959183,-6.051866],"UA":[32.140865,49.724739],"UG":[32.948555,1.972589],"US":[-97.482602,39.538479],"UY":[-55.966942,-32.961127],"UZ":[64.005429,41.693603],"VE":[-64.599381,7.182476],"VN":[105.387292,21.715416],"VU":[166.908762,-15.37153],"WS":[-172.438241,-13.639139],"XK":[20.860719,42.593587],"YE":[45.874383,15.328226],"ZA":[23.665734,-29.708776],"ZM":[26.395298,-14.660804],"ZW":[29.925444,-18.91164]};
    countryCoordinates.HK = [114.17, 22.32];
    countryCoordinates.MO = [113.55, 22.20];
    countryCoordinates.XK = [20.90, 42.60];

    var root = document.getElementById("visitor-statistics");
    if (!root) {
        return;
    }

    var countElement = root.querySelector("[data-visitor-count]");
    var markersElement = root.querySelector("[data-visitor-markers]");
    var locationsElement = root.querySelector("[data-visitor-locations]");
    var apiBase = root.dataset.apiBase;
    var shareSlug = root.dataset.shareSlug;
    var numberFormatter = new Intl.NumberFormat(document.documentElement.lang || "en");
    var regionNames;

    try {
        regionNames = new Intl.DisplayNames([document.documentElement.lang || "en"], { type: "region" });
    } catch (error) {
        regionNames = null;
    }

    function getCountryName(code) {
        if (!regionNames) {
            return code;
        }

        try {
            return regionNames.of(code) || code;
        } catch (error) {
            return code;
        }
    }

    async function getJson(url, options) {
        var response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Visitor statistics request failed");
        }
        return response.json();
    }

    function renderLocations(countries) {
        var normalized = countries
            .map(function (country) {
                return {
                    code: String(country.x || "").toUpperCase(),
                    value: Number(country.y) || 0
                };
            })
            .filter(function (country) {
                return country.code && country.value > 0;
            })
            .sort(function (a, b) {
                return b.value - a.value;
            });

        if (!normalized.length) {
            locationsElement.textContent = "Location data will appear after the first visits.";
            return;
        }

        var maxValue = normalized[0].value;
        normalized.slice(0, 12).forEach(function (country) {
            var coordinates = countryCoordinates[country.code];
            if (!coordinates) {
                return;
            }

            var marker = document.createElement("span");
            var countryName = getCountryName(country.code);
            var size = 8 + Math.round(Math.sqrt(country.value / maxValue) * 5);
            marker.className = "visitor-map-marker";
            marker.style.left = ((coordinates[0] + 180) / 360 * 100) + "%";
            marker.style.top = ((90 - coordinates[1]) / 160 * 100) + "%";
            marker.style.setProperty("--marker-size", size + "px");
            marker.title = countryName + ": " + numberFormatter.format(country.value);
            marker.setAttribute("role", "img");
            marker.setAttribute("aria-label", marker.title);
            markersElement.appendChild(marker);
        });

        locationsElement.textContent = normalized.slice(0, 4).map(function (country) {
            return getCountryName(country.code) + " " + numberFormatter.format(country.value);
        }).join(" · ");
    }

    async function loadVisitorStatistics() {
        if (!apiBase || !shareSlug) {
            throw new Error("Visitor statistics are not configured");
        }

        var share = await getJson(apiBase + "/share/" + encodeURIComponent(shareSlug));
        var headers = {
            "x-umami-share-token": share.token,
            "x-umami-share-context": "1"
        };
        var timeRange = new URLSearchParams({
            startAt: "0",
            endAt: String(Date.now())
        });
        var statsUrl = apiBase + "/websites/" + share.websiteId + "/stats?" + timeRange;
        timeRange.set("type", "country");
        var locationsUrl = apiBase + "/websites/" + share.websiteId + "/metrics?" + timeRange;

        var results = await Promise.all([
            getJson(statsUrl, { headers: headers }),
            getJson(locationsUrl, { headers: headers })
        ]);

        countElement.textContent = numberFormatter.format(Number(results[0].visitors) || 0);
        renderLocations(results[1]);
    }

    loadVisitorStatistics().catch(function () {
        countElement.textContent = "—";
        locationsElement.textContent = "Visitor statistics are temporarily unavailable.";
    });
})();

