    import React, { useState } from 'react'
    import StudentCard from './StudentCard'

    var attendance = [];//empty since no attendance yet
    export default function Form() {
        const [id, setId] = useState(0);//Num
        const [name, setName] = useState('');//String
        const [course, setCourse] = useState('');//String
        const [age, setAge] = useState(0);//Num
        const [gender, setGender] = useState('');//String
        const [date, setDate] = useState('');//String

        function handleIdChange(event) {
            setId(event.target.value);//input type
        }
        function handleNameChange(event) {
            setName(event.target.value);
        }
        function handleCourseChange(event) {
            setCourse(event.target.value);
        }
        function handleAgeChange(event) {
            setAge(event.target.value);
        }
        function handleGenderChange(event) {
            setGender(event.target.value);
        }
        function handleDateChange(event) {
            setDate(event.target.value);
        }

        function addAttendance(){
            attendance.push(//Push is to add a item 
                {
                    id: id,
                    name: name,
                    course: course,
                    age: age,
                    gender: gender,
                    date: date
                }//adding information
            )
            alert("Attendance added!")
                setId(0);
                setName('');
                setCourse('');
                setAge(0);
                setGender('');
                setDate('');
        }//upon clicking enter

        return(
            <>
            <h1><center>Student Attendance Information Form:</center></h1>
            <div className="form-container">
                ID Number: <input type="text" value={id} onChange={handleIdChange}></input><br /><br />{/** what type:Whose value:What function */}
                Name: <input type="text" value={name} onChange={handleNameChange}></input><br /><br />
                Course: <input type="text" value={course} onChange={handleCourseChange}></input><br /><br />
                Age: <input type="number" value={age} onChange={handleAgeChange}></input><br /><br />
                <label>I am a Male:</label> <input type="radio" value="Male" checked ={gender === "Male"} onChange={handleGenderChange}></input><br /><br /> {/* radio is the circle thing*/}
                <label>I am a Female:</label><input type="radio" value="Female" checked ={gender ==="Female"} onChange={handleGenderChange}></input><br /><br />
                Date: <input type="date" value={date} onChange={handleDateChange}></input><br /><br />{/**Date input */}
                
                <div className="card-container">
                    <h2>Student to be added:</h2>
                    <p>Student ID Number: <strong>{id}</strong></p>
                    <p>Student Name: <strong>{name}</strong></p>
                    <p>Student Course: <strong>{course}</strong></p>{/* Display the student to be added */}
                    <p>Student Age: <strong>{age}</strong></p>
                    <p>Student Gender: <strong>{gender}</strong></p>
                    <p>Date of Attendance: <strong>{date}</strong></p>
                </div>
                
                <button onClick={addAttendance}>Submit</button>
            </div>
            <center>{attendance.length > 0 ? (<StudentCard students = {attendance} />) : (<p>No students.</p>)}</center>{/**Display the student card  Call*/}
            </>
        );
    }