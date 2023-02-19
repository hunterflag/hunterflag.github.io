function funcName(){return 'standard function';};     // 函數標準定義
function(){return 'anonymouse function';};              // Error: 非完整定義, 沒有函數名稱 
(function () {
    return 'anonymouse function';
});            // 無名函數的標準定義
var funcName = function (){return 'standard function';};    


