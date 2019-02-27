// let rowCount = 1
// let myObj = []
//
//
// let addBtn = document.getElementById('add-btn')
// let saveBtn = document.getElementById('save-btn')
//
// addBtn.addEventListener('click', createNewObj)
// saveBtn.addEventListener('click', saveObject)
//
// function createNewObj(){
//   let startTime = document.getElementById('time-start').value
//   let endTime = document.getElementById('time-end').value
//   let name = document.getElementById('new-name').value
//   // date = document.getElementById('date')
//   myObj.push({name: name, start: startTime, end: endTime})
//   clearBoard()//main is called within
//
// }
//
// function saveObject(){
//   $.post('', {myObj:myObj}, function(res){
//     console.log(res);
//
//   })
// }
//
// function main() {
//   myObj.forEach(function(person) {
//
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
//   let start = Number(person.start)
//   let end = Number(person.end)
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
// $('body').on('click', '.d-block', function(e){
//   let i = $(this).index()
//   myObj.splice(i, 1)
//   console.log(myObj)
//   $(this).remove()
// })
//
// // $('.d-block').click(function(e){
// //   let i = $(this).index()
// //   myObj.splice(i, 1)
// //   console.log(myObj)
// //   $(this).remove()
// // })
//
//
// function changeCellColor(start, end) {
//   rowDivs = document.querySelectorAll(`#row${rowCount}-cell${start}`)
//   while (start < end) {
//     rowDivs = document.querySelectorAll(`#row${rowCount}-cell${start}`)
//     rowDivs.forEach(cell => {
//       $(cell).toggleClass('bg-green')
//     })
//     start += 1
//   }
// }
//
// // $('.row-container').on("click", "div", function() {
// //   if ($(this).attr('class').includes('zero')) {
// //     let thisRowNum = $(this).attr('id')[3]
// //     let thisText = $(this).text()
// //     Object.keys(myObj).forEach(function(key) {
// //     if (myObj.name == thisText) {
// //       myObj.splice(myObj.indexOf(this), 1)
// //     }
// //   })
// //     thisRow = document.querySelectorAll(`[id*=row${thisRowNum}`)
// //
// //     thisRow.forEach(elem => {
// //       elem.remove()
// //     })
// //
// //   }
// // })
//
//
//
// function clearBoard(){
//   $('.row-container').empty()
//
//     main()
// }
