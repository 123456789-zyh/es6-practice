'use strict';
var number_map_to_word = function(collection){
    var arr=collection.map(function(item,index,arr){
        return ((item<=26)?(String.fromCharCode(96+item)):('a'+String.fromCharCode(item-26+96)));
    });
    return arr;
};

module.exports = number_map_to_word;
