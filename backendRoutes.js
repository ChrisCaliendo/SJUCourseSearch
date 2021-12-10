const express = require("express");
const router = express.Router();


const fs = require('fs');
let rawdata = fs.readFileSync('./courses.json');
let courseList = JSON.parse(rawdata);

router.get('/all', function(req, res){
    let output = { 
        filtered_courses : courseList["courses"]
    }
    res.json(output);
});

router.get('/by_course_code/:qcode', function(req, res) {
    var c_code = req.params['qcode'];
    by_course_code = courseList["courses"].filter(q => q.course_code.includes(c_code));
    let output = { 
        filtered_courses : by_course_code
    }
    res.json(output)
})

router.get('/by_title/:qtitle', function(req, res) {
    var c_title = req.params['qtitle'];
    by_course_title = courseList["courses"].filter(q => q.title.includes(c_title));
    let output = { 
        filtered_courses : by_course_title
    }
    res.json(output)
})

router.get('/by_instructor/:qname', function(req, res) {
    let c_name = req.params['qname'];
    by_instructor = courseList["courses"].filter(q => q.instructor.includes(c_name));
    let output = { 
        filtered_courses : by_instructor
    }
    res.json(output)
})

router.get('/by_level/:qlevel', function(req, res) {
    var c_level = req.params['qlevel'];
    by_course_level = courseList["courses"].filter(q => q.course_level == c_level);
    let output = { 
        filtered_courses : by_course_level
    }
    res.json(output)
})

router.get('/combined_query/:qname/:qlevel', function(req, res) {
    var c_level = req.params['qlevel'];
    var c_name = req.params['qname'];
    by_name_and_level = courseList["courses"].filter(q => {
        if((q.course_level == c_level) && (q.instructor.includes(c_name))){
            return true
        }
        return false
    });
    let output = { 
        filtered_courses : by_name_and_level
    }
    res.json(output)
})

module.exports = router;