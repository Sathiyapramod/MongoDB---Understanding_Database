//creating a new database

//command line 
// step 1 : mongosh
//step 2 : use students
//step 3: create collections


//Task1 : Students databases

// use students 
db.students.insertMany([
    {
      id: 1,
      name: "kannan",
      email: "kannan@mail.com",
      placement: "google",
      tasksSubmittedOn: new Date("2-oct-2020"),
      attendance:"80%",
      presentstatus:"absent"
    },
    {
      id: 2,
      name: "divya",
      email: "divya@mail.com",
      placement: "kissflow",
      tasksSubmittedOn: new Date("3-oct-2020"),
      attendance:"85%",
      presentstatus:"present"
    },
    {
      id: 3,
      name: "satya",
      email: "satya@mail.com",
      placement: "infosys",
      tasksSubmittedOn: new Date("5-oct-2020"),
      attendance:"90%",
      presentstatus:"present"
    },
    {
      id: 4,
      name: "Ahmed",
      email: "Ahmed@mail.com",
      placement: "mac app studio",
      tasksSubmittedOn: new Date("9-oct-2020"),
      attendance:"60%",
      presentstatus:"present"
    },
    {
      id: 5,
      name: "Jennifer",
      email: "jennifer@mail.com",
      placement: "google",
      tasksSubmittedOn: new Date("19-oct-2020"),
      attendance:"90%",
      presentstatus:"absent"
    },
  ]
  )

//Task2 : Codekata users
 
// use codekata 
db.codekata.insertMany([
    {
        id:1,
        name:'kannan',
        email:'kannan@mail.com',
        problems: 20
    },
    {
        id:2,
        name:'divya',
        email:'divya@mail.com',
        problems:25
    },
    {
        id:3,
        name:'satya',
        email:'satya@mail.com',
        problems:35
    },
    {
        id:4,
        name:'Ahmed',
        email:'Ahmed@mail.com',
        problems:80
    },
    {
        id:5,
        name:'Jennifer',
        email:'jennifer@mail.com',
        problems:65
    }
])

//Task3 : Attendance 
// use attendance
db.attendance.insertMany([
    {
        id:1,
        name:'kannan',
        email:'kannan@mail.com',
        attendance: '85%'
    },
    {
        id:2,
        name:'divya',
        email:'divya@mail.com',
        attendance:'90%'
    },
    {
        id:3,
        name:'satya',
        email:'satya@mail.com',
        attendance:'80%'
    },
    {
        id:4,
        name:'Ahmed',
        email:'Ahmed@mail.com',
        attendance:'95%'
    },
    {
        id:5,
        name:'Jennifer',
        email:'jennifer@mail.com',
        attendance:'75%'
    }
])

//Task4 : Topics
// use topics
db.topics.insertMany([
    {
        id:1,
        topics:'html',
        topicDate :new Date('20-oct-20')
    },
    {
        id:2,
        topics:'css',
        topicDate :new Date('29-oct-20')
    },
    {
        id:3,
        topics:'javascript',
        topicDate :new Date('10-oct-20')
    },
    {
        id:4,
        topics:'reactJS',
        topicDate :new Date('2-oct-20')
    },
    {
        id:5,
        topics:'DSA',
        topicDate :new Date('16-oct-20')
    }
])

//Task5 :Tasks
// use tasks
db.tasks.insertMany([
    {
        tasksId: 1,
        tasksTopic: 'HTML',
        startDate: new Date("20-Oct-2020"),
        endDate: new Date("22-Oct-2020"),
        taskRemarks:'nil'
    },
    {
        tasksId: 2,
        tasksTopic: 'CSS',
        startDate: new Date("25-Oct-2020"),
        endDate: new Date("26-Oct-2020"),
        taskRemarks:'nil'
    },
    {
        tasksId: 3,
        tasksTopic: 'Javascript',
        startDate: new Date("28-Oct-2020"),
        endDate: new Date("30-Oct-2020"),
        taskRemarks:'nil'
    },
    {
        tasksId: 4,
        tasksTopic: 'Advanced JS',
        startDate: new Date("1-nov-2020"),
        endDate: new Date("4-nov-2020"),
        taskRemarks:'nil'
    },
    {
        tasksId: 5,
        tasksTopic: 'React',
        startDate: new Date("25-Oct-2020"),
        endDate: new Date("29-Oct-2020"),
        taskRemarks:'nil'
    },
]);

//Task6 : Companydrives
db.companydrives.insertMany([
    {
        id:1,
        drivename:'google',
        date: new Date("15-oct-2020")
    },
    {
        id:2,
        drivename:'kissflow',
        date: new Date("17-oct-2020")
    },
    {
        id:3,
        drivename:'mac app studio',
        date: new Date("26-oct-2020")
    },
    {
        id:4,
        drivename:'infosys',
        date: new Date("1-oct-2020")
    }
]);

//Task7 : mentors

db.mentors.insertMany([
    {
        id:'Steve',
        menteecount:25,
        topics:'html',
        email:'steve@mail.com'
    },
    {
        id:'Sameer',
        menteecount:90,
        topics:'DSA',
        email:'sameer@mail.com'
    },
    {
        id:'Kumar',
        menteecount:45,
        topics:'Javascript',
        email:'kumar@mail.com'
    }
])