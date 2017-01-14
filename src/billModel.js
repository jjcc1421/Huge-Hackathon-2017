"use strict";

module.exports = function () {

    return {

        parseData: (data) => {
            const concept = data.outputs[0].data.concepts[0];
            let parsed = {
                value: null,
                currency: null
            };
            if (concept.value > 0.6)
                switch (concept.name) {
                    case 'Mil Pesos':
                        parsed.value = 1000;
                        parsed.currency = 'COP'
                        break;
                    case 'Cinco Mil Pesos':
                        parsed.value = 5000;
                        parsed.currency = 'COP'
                        break;
                    default:
                        break;
                }
            return parsed;
        }
    };
};