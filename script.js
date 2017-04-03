/**
 * Created by Seth on 4/3/2017.
 */
// window.addEventListener('scroll', function(){
//    var outline = document.getElementsByClassName('outline');
//     console.log('yo...');
//    outline.style.backgroundColor = '#dfd8d1';
// });

document.addEventListener('click', function(){

    console.log('clicked');
    var outlineTop = document.getElementsByClassName('outline-top');
    var outlineRight = document.getElementsByClassName('outline-right');
    var outlineBottom = document.getElementsByClassName('outline-bottom');
    var outlineLeft = document.getElementsByClassName('outline-left');

    outlineTop[0].style.backgroundColor = '#dfd8d1';
    outlineRight[0].style.backgroundColor = '#dfd8d1';
    outlineBottom[0].style.backgroundColor = '#dfd8d1';
    outlineLeft[0].style.backgroundColor = '#dfd8d1';
console.log('clicked....')
});