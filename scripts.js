document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      events: [
           // First Semester: September 2024 to February 2025
        {
          title: 'School Begins',
          start: '2024-09-17',
          color: '#6CB4EE',
        },
        {
          title: 'Half Day (Meskel Traffic)',
          start: '2024-09-26',
          color: '#FFD700',
        },
        {
          title: 'Meskel Holiday',
          start: '2024-09-27',
          color: '#FFA07A',
        },
        {
          title: 'Ethiopian National Flag Day',
          start: '2024-10-14',
          color: '#6CB4EE',
        },
        {
          title: 'Midterm Progress Report',
          start: '2024-11-01',
          color: '#A8E6CF',
        },
        {
          title: 'Staff Development Day',
          start: '2024-11-29',
          color: '#D8BFD8',
        },
        {
          title: 'Ethiopian Christmas Day',
          start: '2025-01-07',
          color: '#FFA07A',
          className: 'holiday'
        },
        {
          title: 'First Semester Break',
          start: '2025-02-06',
          end: '2025-02-10',
          color: '#D8BFD8',
        },
  
        // Second Semester: February 2025 to June 2025
        {
          title: 'Third Quarter Begins',
          start: '2025-02-10',
          color: '#6CB4EE',
        },
        {
          title: ' Grade Reports will be sent home ',
          start: '2025-02-21',
          color: '#FFA07A',
        },
        {
          title: ' Worksheet 1 ',
          start: '2025-02-25',
          end: '2025-02-28',
          color: '#FFA07A',
        },
  
        {
          title: 'Adwa Victory Day',
          start: '2025-03-02',
          color: '#FFA07A',
          className: 'holiday'
        },
        {
          title: ' Test 1 ',
          start: '2025-03-05',
          end: '2025-03-08',
          color: '#FFA07A',
        },
        {
          title: ' Worksheet 2 ',
          start: '2025-03-19',
          end: '2025-03-22',
          color: '#FFA07A',
        },
        {
          title: ' Test 2 ',
          start: '2025-03-26',
          end: '2025-03-29',
          color: '#FFA07A',
        },
  
        {
          title: 'Eid al-Fitr',
          start: '2025-03-31',
          color: '#FFA07A',
          className: 'holiday'
        },
        {
          title: ' Revision for FQT3 ',
          start: '2025-04-09',
          end: '2025-04-11',
          color: '#FFA07A',
        },
        {
          title: '  Final Quarterly Tests ',
          start: '2025-03-14',
          end: '2025-03-17',
          color: '#FFA07A',
        },
        {
          title: ' Earth Day contest letter will be sent home ',
          start: '2025-03-17',
          color: '#FFA07A',
        },
        {
          title: ' Ethiopian Good Friday ',
          start: '2025-03-18',
          color: '#FFA07A',
          className: 'holiday'
        },
        {
          title: 'Ethiopian Easter',
          start: '2025-04-20',
          color: '#FFA07A',
          className: 'holiday'
        },
        {
          title: 'No School for Students, Staff Development Day ',
          start: '2025-04-21',
          color: '#FFA07A',
        },
        {
          title: ' FQT3 Examinations Return Day ',
          start: '2025-04-22',
          color: '#FFA07A',
        },
        {
          title: 'Earth Day is observed in the school',
          start: '2025-04-22',
          color: '#FFA07A',
        },
        {
          title: ' Fourth Quarter Begins',
          start: '2025-04-23',
          color: '#FFA07A',
        },
        {
          title: 'Report Card will be sent home',
          start: '2025-04-25',
          color: '#FFA07A',
        },{
          title: ' Parent-Teacher Conference',
          start: '2025-04-29',
          color: '#FFA07A',
        },
        {
          title: ' Annual Workers Day will be celebrated ',
          start: '2025-04-30',
          color: '#FFA07A',
        },
        {
          title: 'Labor Day',
          start: '2025-05-01',
          color: '#FFA07A',
          className: 'holiday'
        },
        {
          title: ' Worksheet 1 ',
          start: '2025-05-07',
          end: '2025-05-10',
          color: '#FFA07A',
        },
  
        {
          title: 'Mothers Day will be Observed ',
          start: '2025-05-10',
          color: '#FFA07A',
        },
        {
          title: ' Test 1 ',
          start: '2025-05-14',
          end: '2025-05-17',
          color: '#FFA07A',
        },
        {
          title: ' Worksheet 2 ',
          start: '2025-05-21',
          end: '2025-05-24',
          color: '#FFA07A',
        },
        {
          title: ' Test 2 ',
          start: '2025-05-28',
          end: '2025-05-31',
          color: '#FFA07A',
        },
        {
          title: 'Eid al-Adha',
          start: '2025-06-07',
          color: '#FFA07A',
          className: 'holiday'
        },
        {
          title: ' FQT4 Exams Revision Day  ',
          start: '2025-06-05',
          end: '2025-06-06',
          color: '#FFA07A',
        },
        {
          title: ' Final Quarterly Test ',
          start: '2025-06-10',
          end: '2025-06-13',
          color: '#FFA07A',
        },
        {
          title: ' FQT4 Examination papers returned ',
          start: '2025-06-14',
          color: '#FFA07A',
        },
        {
          title: ' Review Days for Final Examinations ',
          start: '2025-06-14',
          end: '2025-06-17',
          color: '#FFA07A',
        },
        {
          title: '  Fathers Day, Students prepare gifts for their father ',
          start: '2025-06-18',
          color: '#FFA07A',
        },
        {
          title: '  Second Semester Final Examination Days ',
          start: '2025-06-18',
          end: '2025-06-21',
          color: '#FFA07A',
        },
        {
          title: ' Collect the Final Examination Papers ',
          start: '2025-06-24',
          color: '#FFA07A',
        },
        {
          title: ' Exam papers correction days  ',
          start: '2025-06-25',
          end: '2025-06-27',
          color: '#FFA07A',
        },
        {
          title: ' School Closed for students ',
          start: '2025-06-25',
          end: '2025-06-28',
          color: '#FFA07A',
        },
        {
          title: 'School Closing and Graduation',
          start: '2025-06-29',
          color: '#6CB4EE',
        }
      ]
  });

  calendar.render();
});
