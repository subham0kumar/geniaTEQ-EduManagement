"use client";
import { createContext, useContext, useState } from "react";

const Student_data = createContext(null);

function Context({ children }) {
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/students");
      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }
      const data = await response.json();
      // console.log(data);
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const deleteStudent = async (studentId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/students/${studentId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      const responseBody = await response.text();
      if (responseBody === "") {
        console.log("Student deleted");
      } else {
        const data = JSON.parse(responseBody);
        console.log("Student deleted:", data);
      }

      // Refresh the list of students after deletion
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const addStudent = async (student) => {
    try {
      const response = await fetch("http://localhost:3001/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      const data = await response.json();
      console.log("Student added:", data);

      // Refresh the list of students after adding a new one
      fetchStudents(); // Assuming you have a function to fetch and update the student list
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const updateStudent = async (studentId, updatedData) => {
    try {
      // debugger;
      const response = await fetch(
        `http://localhost:3001/api/students/${studentId}`,
        {
          method: "PUT", // or "PATCH"
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update student");
      }

      const data = await response.json();
      console.log("Student updated:", data);

      // Refresh the list of students after update
      fetchStudents(); // Assuming you have a function to fetch and update the student list
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const fetchStudentById = async (studentId) => {
    setLoader(true);
    try {
      const response = await fetch(
        `http://localhost:3001/api/students/${studentId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch student by ID");
      }
      const data = await response.json();
      setStudent(data);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching student by ID:", error);
      return null;
    }
    setLoader(false);
  };

  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Student_data.Provider
      value={{
        addStudent,
        fetchStudents,
        fetchStudentById,
        deleteStudent,
        students,
        student,
        setStudents,
        loading,
        loader,
        updateStudent,
      }}
    >
      {children}
    </Student_data.Provider>
  );
}

export default Context;

export const useStudentData = () => useContext(Student_data);
