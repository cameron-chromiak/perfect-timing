// let rowCount = 1
// let myObj = []
// var myObj2 = JSON.parse('{{{json myObj2}}}')
// console.log(myObj2)
//
//
// let addBtn = document.getElementById('add-btn')
// let saveBtn = document.getElementById('save-btn')
// let dltBtn = document.getElementById('delete-btn')
// let backSave = document.getElementById('back-save')
//
// addBtn.addEventListener('click', createNewObj)
// saveBtn.addEventListener('click', saveObj)
// backSave.addEventListener('click', saveObj)
// dltBtn.addEventListener('click', deleteObj)
//
//
// $('body').ready(function(){
//   myObj = myObj.concat(myObj2)
//   main(myObj)
// })
//
// function createNewObj(){
//   let startTime = document.getElementById('time-start').value
//   let endTime = document.getElementById('time-end').value
//   let name = document.getElementById('new-name').value
//   myObj.push({name: name, start: startTime, end: endTime})
//   clearBoard()//main is called within
// }
// function saveObj(){
//   $.post('', {data:JSON.stringify(myObj)}, function(res){
//     // console.log(res);
//   })
// }
// function deleteObj(e){
//   e.preventDefault()
//   $.ajax({
//     url: '',
//     type: 'DELETE',
//     success: function(e){
//       console.log(e)
//       window.location.pathname = '/scheduele/dashboard'
//     }
//   })
// }
// function main(obj) {
//   obj.forEach(function(person) {
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
// $('body').on('click', '.d-block', function(e){
//   let i = $(this).index()
//   myObj.splice(i, 1)
//   console.log(myObj)
//   $(this).remove()
// })
// // $('.d-block').click(function(e){
// //   let i = $(this).index()
// //   myObj.splice(i, 1)
// //   console.log(myObj)
// //   $(this).remove()
// // })
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
// function clearBoard(){
//   $('.row-container').empty()
//     main(myObj)
// }
