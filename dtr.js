(function(){
    'use strict';
    var urlVars = getUrlVars();
    var findDynamicPhrases = new RegExp('\%(.*?)\%', 'g');
    var findPercent = new RegExp('%', 'g');
    var sections = $('.widget-section');
    function convertPhrase(string) {
        string = string.replace(findPercent, '').split('||');
        var dynamic = string[0];
        var fallback = string[1];
        var result = fallback;
        if ($.isEmptyObject(urlVars)) {
            return result;
        }
        $.each(urlVars, function (key, value) {
            if (value === '') {
                return false;
            }
            var findKey = new RegExp('{{'+key+'}}', 'g');
            if (dynamic.match(findKey)) {
                result = dynamic.replace(findKey, decodeURIComponent(value));
                return false;
            }
        });
        return result;
    }

    sections.html(function(i, old){
        return old.replace(findDynamicPhrases, convertPhrase);
    });
})();