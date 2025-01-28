export const deleteStudent = async (studentId) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/users/${studentId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete student");
    }

    const data = await response.json();
    console.log("Student deleted:", data);

    // Refresh the list of students after deletion
    fetchStudents(); // Assuming you have a function to fetch and update the student list
  } catch (error) {
    console.error("Error deleting student:", error);
  }
};
