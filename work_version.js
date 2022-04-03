let tables = document.getElementsByClassName('table')[0];

tables.addEventListener('mouseover', function(event) {
  let cIndex = event.target.cellIndex+1;
  let rIndex = event.target.parentNode.rowIndex;
  console.log(cIndex);
  console.log(rIndex);
  let getRow;
  
  if (rIndex || rIndex === 0) {  
  if (rIndex == 0) {
   getRow = document.querySelectorAll(`.table thead tr:nth-child(1) *:nth-child(-n+${cIndex})`);
  } else {
   getRow = document.querySelectorAll(`.table tbody tr:nth-child(${rIndex}) *:nth-child(-n+${cIndex})`);
  }
  
  getRow.forEach((item) => {
  item.classList.add('purple');
  });
  
   const getCol = document.querySelectorAll(`.table * tr:nth-child(-n+${rIndex}) *:nth-child(${cIndex})`);
  getCol.forEach((item) => {
  item.classList.add('purple');
  });
  }
  
});


tables.addEventListener('mouseout', function(event) {
  const gettd = document.querySelectorAll(`.table *.purple`);
  gettd.forEach((item) => {
  item.classList.remove('purple');
  });
  
  
});