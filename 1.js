window.onload = function () {
    var name = document.querySelector(".search-1");
    var oldColor = null;
    var qifei = document.querySelector(".qifei");
    var tb = document.querySelector("#tb");
    qifei.onclick = function () {
        // tb的行
        var aRows = tb.tBodies[0].rows;

        // 有i个行
        for (var i = 0; i < aRows.length; i++) {
            // 表格中原有的第i行第一列的名称
            var tdValue = aRows[i].cells[1].innerHTML;
            // 我输入的value
            var myInput = name.value;

            for (var j = 0; j < myInput.length; j++) {
                if (tdValue.search(myInput[j - 1]) >= 0 && tdValue.search(myInput[j]) >= 0 && tdValue.search(myInput[j+1]) >= 0 && tdValue.search(myInput[j+2]) >= 0 ) {
                    // if(tdValue[j - 1].search(myInput[j - 1]) >= 0 && tdValue[j].search(myInput[j]) >= 0 && tdValue[j+1].search(myInput[j+1]) >= 0 ){
                    //   if (tdValue.search(myInput[j]) >= 0) {                        
                        for (var n = 0; n < 10; n++) {
                            // aRows[n].innerHTML = aRows[i].innerHTML;
                            aRows[n].innerHTML = aRows[i].innerHTML;
                            aRows[i].style.background="aqua";
                            break;}
                    }else {
                        // aRows[0].innerHTML = "请输入正确的城市名称";
                    }
            }
        }
    }
}
