var listCoursesBlock = document.querySelector('#list-courses');
var courseApi = 'http://localhost:3000/courses';


function start() {
    getCourses(function(courses) {;
        renderCourses(courses);
    });
}
start();


function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}
    function renderCourses(courses) {
        var htmls = courses.map(function(course) {
            return `<li>
                <h2>${course.name}</h2>
                <p>${course.description}</p>
            </li>`;
        });
        listCoursesBlock.innerHTML = htmls.join('');
}