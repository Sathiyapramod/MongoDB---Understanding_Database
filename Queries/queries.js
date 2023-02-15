// Find all the topics and tasks which are thought in the month of October
//use topics
db.topics.aggregate([
  {
    $match: {
      $and: [
        {
          $or: [
            {
              topicDate: { $gte: new Date("1-oct-2020") },
              topicDate: { $lte: new Date("31-oct-2020") },
            },
          ],
        },
      ],
    },
  },
]);

//use tasks
db.tasks.aggregate([
  {
    $match: {
      $and: [
        {
          $or: [
            {
              topicDate: { $gte: new Date("1-oct-2020") },
              topicDate: { $lte: new Date("31-oct-2020") },
            },
          ],
        },
      ],
    },
  },
]);

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companydrives.aggregate([
  {
    $match: {
      $or: [
        {
          date: { $gte: new Date("15-oct-2020") },
          date: { $lte: new Date("31-oct-2020") },
        },
      ],
    },
  },
]);

//Find all the company drives and students who are appeared for the placement.

db.students.find({
  placement: { $ne: null },
});

db.companydrives.find({
  date: { $ne: null },
});

// Find the number of problems solved by the user in codekata

db.codekata.find({}, { name: 1, problems: 1, _id: 0 });

// Find all the mentors with who has the mentee's count more than 15

db.mentors.aggregate({
  $match: {
    menteecount: { $gt: 15 },
  },
});

//Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.students.aggregate(
  [
    {
      $match: {presentstatus:"absent"},
      $match: {
        $and:[
          {
            $or: [
              {
                tasksSubmittedOn: {$gte: new Date("30-oct-2020")},
                tasksSubmittedOn: {$lte: new Date("15-oct-2020")}
              }
            ]
          }]
      }
    }
  ]
  );
