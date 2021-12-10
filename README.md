# SJUCourseSearch
The api has 6 routes designed to query the list of available courses:

ALL COURSES
route: http://localhost:3000/api/all
This route is designed to return all courses in the courses.json file with 
no parameters or specifications

BY COURSE CODE
route: http://localhost:3000/api/by_course_code/:qcode
This route is designed to return all the courses that includes the given
parameter string (:qcode) in the course_code json value

BY COURSE TITLE
route: http://localhost:3000/api/by_title/:qtitle
This route is designed to return all the courses that includes the given
parameter string (:qtitle) in the title json value

BY INSTRUCTOR
route: http://localhost:3000/api/by_instructor/:qname
This route is designed to return all the courses that includes the given
parameter string (:qname) in the course instructor json value

BY COURSE LEVEL
route: http://localhost:3000/api/by_level/:qlevel
This route is designed to return all the courses that has the exact given
parameter string (:qlevel) as the course_level json value

BY INSTRUCTOR AND COURSE LEVEL
route: http://localhost:3000/api/combined_query/:qname/:qlevel
This route is designed to return all the courses that has the exact given
parameter string (:qlevel) as the course_level json value and includes the
given parameter string (:qname) in the course instructor json value
