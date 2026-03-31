
const courses = document.querySelectorAll('.courses_js')


courses.forEach(course => {

const hoverableElement = course.querySelector('#courseShow');
const targetElement = course.querySelector('#hide_element');
function showElement() {
  targetElement.style.display = 'flex'; 
}


function hideElement() {
  targetElement.style.display = 'none'; 
}


hoverableElement.addEventListener('mouseover', showElement);
hoverableElement.addEventListener('mouseleave', hideElement);

});
