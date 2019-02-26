// let rowCount = 1
//
// let addBtn = document.getElementById('add-btn')
//
// addBtn.addEventListener('click', createNewObj)
//
// function createNewObj(){
//   let startTime = document.getElementById('time-start').value
//   let endTime = document.getElementById('time-end').value
//   let name = document.getElementById('new-name').value
//   myObj.push({name: name, start: startTime, end: endTime})
//   clearBoard()
//
// }
//
// myObj = [{
//   name: "Jim",
//   start: 1,
//   end: 9
// }, {
//   name: "Bob",
//   start: 2,
//   end: 9
// }, {
//   name: "Skeeter",
//   start: 3,
//   end: 7
// }, {
//   name: "Jennylee",
//   start: 8,
//   end: 12
// }]
//
// function main() {
//   console.log('main');
//   myObj.forEach(function(person) {
//     // console.log(person.name, person.start, person.end);
//     jQuery('<div/>', {
//       id: `row-${rowCount}`,
//       class: 'd-block',
//     }).appendTo('.row-container')
//     addHourDivs(rowCount, person)
//     rowCount += 1
//   })
// }
//
// function addHourDivs(rowCount, person) {
//   //+5 to account for offset
//   console.log('addHourDivs');
//   let start = Number(person.start) + 5
//   let end = Number(person.end) + 5
//   let rowDivs
//   for (let i = 0; i < 18; i++) {
//     if (i == 0) {
//       jQuery('<div/>', {
//         id: `row${rowCount}-cell${i}`,
//         class: `d-inline-block generated-div border zero-row${rowCount} `,
//         text: person.name
//       }).appendTo(`#row-${rowCount}`)
//     } else {
//       jQuery('<div/>', {
//         id: `row${rowCount}-cell${i}`,
//         class: `d-inline-block generated-div border px-4 py-2`
//       }).appendTo(`#row-${rowCount}`)
//     }
//   }
//   changeCellColor(start, end)
// }
//
//
// function changeCellColor(start, end) {
//   console.log('changeCellColor');
//   rowDivs = document.querySelectorAll(`#row${rowCount}-cell${start}`)
//   while (start < end) {
//     console.log(start, end);
//     rowDivs = document.querySelectorAll(`#row${rowCount}-cell${start}`)
//     rowDivs.forEach(cell => {
//       $(cell).toggleClass('bg-green')
//     })
//     start += 1
//   }
//   // let firstCellInRow = document.querySelectorAll('.zero-cell')
// }
//
// $('.row-container').on("click", "div", function() {
//   if ($(this).attr('class').includes('zero')) {
//     let thisRow = $(this).attr('id')[3]
//     thisRow = document.querySelectorAll(`[id*=row${thisRow}`)
//     thisRow.forEach(elem => {
//       elem.remove()
//     })
//   }
// })
//
//
//
// function clearBoard(){
//   console.log('clearBoard');
//   $('.row-container').empty()
//
//     main()
// }
//
// main()
