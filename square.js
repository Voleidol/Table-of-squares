window.addEventListener('DOMContentLoaded', function() {

    let tableResponsive = document.getElementsByClassName('table-responsive')[0],
        tables = document.getElementsByClassName('table')[0],
        labelPrimary = document.getElementsByClassName('highlight'),
        greenBackLeft = document.getElementsByClassName('green-back-left'),
        greenBack = document.getElementsByClassName('green-back'),
        resNumber = document.getElementsByClassName('res-number')[0],
        resAnswer = document.getElementsByClassName('res-answer')[0],
        notUseUp = document.getElementsByClassName('do-not-use-up'),
        notUseLeft = document.getElementsByClassName('do-not-use-left'),
        resultStyle = document.getElementsByClassName('result-style')[0],
        rows = document.querySelectorAll('.row'),
        firstLine = document.getElementsByClassName('first-line'),
        twoLine = document.querySelectorAll('.two-line');

    tables.addEventListener('mouseover', function(event) {
        let target = event.target;
        const table =[];
        const activeIndex = [];
        for (let i = 0; i < rows.length; i++) {
            const rowsValue = [];
            for (let k = 0; k < rows[i].childNodes.length; k++) {
                if (rows[i].childNodes[k].innerHTML) {
                    rowsValue.push(+rows[i].childNodes[k].innerHTML);
                }     
            }
            table.push(rowsValue);
        } 
        console.log(table);
        let rowIndex = table.findIndex((row) => row.find((i) => i == target.innerHTML));
        let elIndex = table[rowIndex].findIndex((i) => i == target.innerHTML);
        let rowValue = table[rowIndex].slice(0, elIndex+1);
        for (let i = 0; i <= rowIndex; i++) {
            activeIndex.push(table[i][elIndex]);
        }
        activeIndex.push(...rowValue);
        console.log(activeIndex);
        for (let i = 0; i < labelPrimary.length-1; i++) {
            console.log(labelPrimary[i].dataset.index);
            if(activeIndex.includes(+labelPrimary[i].dataset.index)) {
                console.log(labelPrimary[i].dataset.index);
                // labelPrimary[i].style.backgroundColor = 'red';
            }
        }
    });
  
    // tables.addEventListener('mouseout', function(event) {
    //     let target = event.target;
    //     if (target.classList.contains('label-primary') && !target.classList.contains('do-not-use-up') && !target.classList.contains('do-not-use-left')) {
    //         for (let i = 0; i < labelPrimary.length; i++) {
    //             if(labelPrimary[i] == target) {
    //                 labelPrimary[i].style.backgroundColor = '#dfcdf2';
    //                 labelPrimary[i].style.color = 'black';
    //             }             
    //         }           
    //     }       
    // });  
});
