// Define the course object
const course = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
      { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ],
    
    // Method to render the course information
    renderCourse: function () {
      const courseInfo = document.getElementById('course-info');
      if (courseInfo) {
        courseInfo.innerHTML = `<h2>${this.name} (${this.code})</h2>`;
      } else {
        console.error("Element #course-info not found");
      }
    },
  
    // Method to render the sections
    renderSections: function () {
      const sectionsTable = document.querySelector('#sections tbody');
      if (sectionsTable) {
        sectionsTable.innerHTML = ''; // Clear any previous content
        
        this.sections.forEach(section => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
          `;
          sectionsTable.appendChild(row);
        });
      } else {
        console.error("Table #sections not found");
      }
    },
  
    // Method to enroll a student in a section
    enrollStudent: function (sectionNum) {
      const section = this.sections.find(sec => sec.sectionNum === sectionNum);
      if (section) {
        section.enrolled += 1;
        this.renderSections();  // Update the sections table
      } else {
        console.error(`Section ${sectionNum} not found`);
      }
    },
  
    // Method to drop a student from a section
    dropStudent: function (sectionNum) {
      const section = this.sections.find(sec => sec.sectionNum === sectionNum);
      if (section && section.enrolled > 0) {
        section.enrolled -= 1;
        this.renderSections();  // Update the sections table
      } else {
        console.error(`Section ${sectionNum} not found or no students enrolled`);
      }
    }
  };
  
  // Call the methods to render the course and sections when the page loads
  window.onload = function() {
    course.renderCourse();
    course.renderSections();
  };
  
  // Event Listeners for enrolling and dropping students
  document.querySelector('#enrollStudent').addEventListener('click', function() {
    const sectionNum = parseInt(document.querySelector('#sectionNumber').value);
    if (!isNaN(sectionNum)) {
      course.enrollStudent(sectionNum);  // Enroll student in the section
    }
  });
  
  document.querySelector('#dropStudent').addEventListener('click', function() {
    const sectionNum = parseInt(document.querySelector('#sectionNumber').value);
    if (!isNaN(sectionNum)) {
      course.dropStudent(sectionNum);  // Drop student from the section
    }
  });
  