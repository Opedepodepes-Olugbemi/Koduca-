const db = require('../models');
const Users = db.users;

const Analytics = db.analytics;

const Courses = db.courses;

const DiscussionBoards = db.discussion_boards;

const Enrollments = db.enrollments;

const Instructors = db.instructors;

const Posts = db.posts;

const Students = db.students;

const Organizations = db.organizations;

const AnalyticsData = [
  {
    // type code here for "relation_one" field

    student_engagement: 85,

    course_completion_rate: 75,

    instructor_performance: 90,

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    student_engagement: 70,

    course_completion_rate: 60,

    instructor_performance: 80,

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    student_engagement: 90,

    course_completion_rate: 85,

    instructor_performance: 95,

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    student_engagement: 65,

    course_completion_rate: 55,

    instructor_performance: 70,

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    student_engagement: 75,

    course_completion_rate: 65,

    instructor_performance: 85,

    // type code here for "relation_one" field
  },
];

const CoursesData = [
  {
    title: 'Introduction to Programming',

    description: 'Learn the basics of programming using Python.',

    // type code here for "files" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Advanced Mathematics',

    description: 'A deep dive into calculus and linear algebra.',

    // type code here for "files" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Web Development',

    description: 'Learn how to build modern web applications.',

    // type code here for "files" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Data Science',

    description: 'An introduction to data analysis and machine learning.',

    // type code here for "files" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    title: 'Digital Marketing',

    description: 'Learn the fundamentals of digital marketing.',

    // type code here for "files" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const DiscussionBoardsData = [
  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },
];

const EnrollmentsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'completed',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'pending',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'completed',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'completed',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    payment_status: 'pending',

    // type code here for "relation_one" field
  },
];

const InstructorsData = [
  {
    // type code here for "relation_one" field

    qualifications: 'PhD in Computer Science',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    qualifications: 'MSc in Mathematics',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    qualifications: 'BSc in Marketing',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    qualifications: 'PhD in Data Science',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    qualifications: 'MSc in Web Development',

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const PostsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    content: 'I am excited to start this course!',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    content: 'Looking forward to learning Python.',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    content: 'Calculus is challenging but rewarding.',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    content: 'Linear algebra is fascinating.',

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    content: "Can't wait to build my first web app!",

    // type code here for "relation_one" field
  },
];

const StudentsData = [
  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_many" field
    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'James Clerk Maxwell',
  },

  {
    name: 'Arthur Eddington',
  },

  {
    name: 'Carl Linnaeus',
  },

  {
    name: 'Charles Darwin',
  },

  {
    name: 'Karl Landsteiner',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User3 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (User3?.setOrganization) {
    await User3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User4 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (User4?.setOrganization) {
    await User4.setOrganization(relatedOrganization4);
  }
}

async function associateAnalyticWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setCourse) {
    await Analytic0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setCourse) {
    await Analytic1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setCourse) {
    await Analytic2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic3 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Analytic3?.setCourse) {
    await Analytic3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Analytic4 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Analytic4?.setCourse) {
    await Analytic4.setCourse(relatedCourse4);
  }
}

async function associateAnalyticWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic0 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Analytic0?.setOrganization) {
    await Analytic0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic1 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Analytic1?.setOrganization) {
    await Analytic1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic2 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Analytic2?.setOrganization) {
    await Analytic2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic3 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Analytic3?.setOrganization) {
    await Analytic3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Analytic4 = await Analytics.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Analytic4?.setOrganization) {
    await Analytic4.setOrganization(relatedOrganization4);
  }
}

// Similar logic for "relation_many"

async function associateCourseWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course0 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Course0?.setOrganization) {
    await Course0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course1 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Course1?.setOrganization) {
    await Course1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course2 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Course2?.setOrganization) {
    await Course2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course3 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Course3?.setOrganization) {
    await Course3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Course4 = await Courses.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Course4?.setOrganization) {
    await Course4.setOrganization(relatedOrganization4);
  }
}

async function associateDiscussionBoardWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard0 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (DiscussionBoard0?.setCourse) {
    await DiscussionBoard0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard1 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (DiscussionBoard1?.setCourse) {
    await DiscussionBoard1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard2 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (DiscussionBoard2?.setCourse) {
    await DiscussionBoard2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard3 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (DiscussionBoard3?.setCourse) {
    await DiscussionBoard3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const DiscussionBoard4 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (DiscussionBoard4?.setCourse) {
    await DiscussionBoard4.setCourse(relatedCourse4);
  }
}

// Similar logic for "relation_many"

async function associateDiscussionBoardWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const DiscussionBoard0 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (DiscussionBoard0?.setOrganization) {
    await DiscussionBoard0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const DiscussionBoard1 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (DiscussionBoard1?.setOrganization) {
    await DiscussionBoard1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const DiscussionBoard2 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (DiscussionBoard2?.setOrganization) {
    await DiscussionBoard2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const DiscussionBoard3 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (DiscussionBoard3?.setOrganization) {
    await DiscussionBoard3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const DiscussionBoard4 = await DiscussionBoards.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (DiscussionBoard4?.setOrganization) {
    await DiscussionBoard4.setOrganization(relatedOrganization4);
  }
}

async function associateEnrollmentWithStudent() {
  const relatedStudent0 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setStudent) {
    await Enrollment0.setStudent(relatedStudent0);
  }

  const relatedStudent1 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setStudent) {
    await Enrollment1.setStudent(relatedStudent1);
  }

  const relatedStudent2 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setStudent) {
    await Enrollment2.setStudent(relatedStudent2);
  }

  const relatedStudent3 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment3 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Enrollment3?.setStudent) {
    await Enrollment3.setStudent(relatedStudent3);
  }

  const relatedStudent4 = await Students.findOne({
    offset: Math.floor(Math.random() * (await Students.count())),
  });
  const Enrollment4 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Enrollment4?.setStudent) {
    await Enrollment4.setStudent(relatedStudent4);
  }
}

async function associateEnrollmentWithCourse() {
  const relatedCourse0 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setCourse) {
    await Enrollment0.setCourse(relatedCourse0);
  }

  const relatedCourse1 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setCourse) {
    await Enrollment1.setCourse(relatedCourse1);
  }

  const relatedCourse2 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setCourse) {
    await Enrollment2.setCourse(relatedCourse2);
  }

  const relatedCourse3 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment3 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Enrollment3?.setCourse) {
    await Enrollment3.setCourse(relatedCourse3);
  }

  const relatedCourse4 = await Courses.findOne({
    offset: Math.floor(Math.random() * (await Courses.count())),
  });
  const Enrollment4 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Enrollment4?.setCourse) {
    await Enrollment4.setCourse(relatedCourse4);
  }
}

async function associateEnrollmentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Enrollment0 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Enrollment0?.setOrganization) {
    await Enrollment0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Enrollment1 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Enrollment1?.setOrganization) {
    await Enrollment1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Enrollment2 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Enrollment2?.setOrganization) {
    await Enrollment2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Enrollment3 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Enrollment3?.setOrganization) {
    await Enrollment3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Enrollment4 = await Enrollments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Enrollment4?.setOrganization) {
    await Enrollment4.setOrganization(relatedOrganization4);
  }
}

async function associateInstructorWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor0 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Instructor0?.setUser) {
    await Instructor0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor1 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Instructor1?.setUser) {
    await Instructor1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor2 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Instructor2?.setUser) {
    await Instructor2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor3 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Instructor3?.setUser) {
    await Instructor3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Instructor4 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Instructor4?.setUser) {
    await Instructor4.setUser(relatedUser4);
  }
}

// Similar logic for "relation_many"

async function associateInstructorWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Instructor0 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Instructor0?.setOrganization) {
    await Instructor0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Instructor1 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Instructor1?.setOrganization) {
    await Instructor1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Instructor2 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Instructor2?.setOrganization) {
    await Instructor2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Instructor3 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Instructor3?.setOrganization) {
    await Instructor3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Instructor4 = await Instructors.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Instructor4?.setOrganization) {
    await Instructor4.setOrganization(relatedOrganization4);
  }
}

async function associatePostWithDiscussion_board() {
  const relatedDiscussion_board0 = await DiscussionBoards.findOne({
    offset: Math.floor(Math.random() * (await DiscussionBoards.count())),
  });
  const Post0 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Post0?.setDiscussion_board) {
    await Post0.setDiscussion_board(relatedDiscussion_board0);
  }

  const relatedDiscussion_board1 = await DiscussionBoards.findOne({
    offset: Math.floor(Math.random() * (await DiscussionBoards.count())),
  });
  const Post1 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Post1?.setDiscussion_board) {
    await Post1.setDiscussion_board(relatedDiscussion_board1);
  }

  const relatedDiscussion_board2 = await DiscussionBoards.findOne({
    offset: Math.floor(Math.random() * (await DiscussionBoards.count())),
  });
  const Post2 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Post2?.setDiscussion_board) {
    await Post2.setDiscussion_board(relatedDiscussion_board2);
  }

  const relatedDiscussion_board3 = await DiscussionBoards.findOne({
    offset: Math.floor(Math.random() * (await DiscussionBoards.count())),
  });
  const Post3 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Post3?.setDiscussion_board) {
    await Post3.setDiscussion_board(relatedDiscussion_board3);
  }

  const relatedDiscussion_board4 = await DiscussionBoards.findOne({
    offset: Math.floor(Math.random() * (await DiscussionBoards.count())),
  });
  const Post4 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Post4?.setDiscussion_board) {
    await Post4.setDiscussion_board(relatedDiscussion_board4);
  }
}

async function associatePostWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Post0 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Post0?.setUser) {
    await Post0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Post1 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Post1?.setUser) {
    await Post1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Post2 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Post2?.setUser) {
    await Post2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Post3 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Post3?.setUser) {
    await Post3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Post4 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Post4?.setUser) {
    await Post4.setUser(relatedUser4);
  }
}

async function associatePostWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Post0 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Post0?.setOrganization) {
    await Post0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Post1 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Post1?.setOrganization) {
    await Post1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Post2 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Post2?.setOrganization) {
    await Post2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Post3 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Post3?.setOrganization) {
    await Post3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Post4 = await Posts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Post4?.setOrganization) {
    await Post4.setOrganization(relatedOrganization4);
  }
}

async function associateStudentWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student0 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Student0?.setUser) {
    await Student0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student1 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Student1?.setUser) {
    await Student1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student2 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Student2?.setUser) {
    await Student2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student3 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Student3?.setUser) {
    await Student3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Student4 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Student4?.setUser) {
    await Student4.setUser(relatedUser4);
  }
}

// Similar logic for "relation_many"

async function associateStudentWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Student0 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Student0?.setOrganization) {
    await Student0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Student1 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Student1?.setOrganization) {
    await Student1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Student2 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Student2?.setOrganization) {
    await Student2.setOrganization(relatedOrganization2);
  }

  const relatedOrganization3 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Student3 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Student3?.setOrganization) {
    await Student3.setOrganization(relatedOrganization3);
  }

  const relatedOrganization4 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Student4 = await Students.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Student4?.setOrganization) {
    await Student4.setOrganization(relatedOrganization4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Analytics.bulkCreate(AnalyticsData);

    await Courses.bulkCreate(CoursesData);

    await DiscussionBoards.bulkCreate(DiscussionBoardsData);

    await Enrollments.bulkCreate(EnrollmentsData);

    await Instructors.bulkCreate(InstructorsData);

    await Posts.bulkCreate(PostsData);

    await Students.bulkCreate(StudentsData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateAnalyticWithCourse(),

      await associateAnalyticWithOrganization(),

      // Similar logic for "relation_many"

      await associateCourseWithOrganization(),

      await associateDiscussionBoardWithCourse(),

      // Similar logic for "relation_many"

      await associateDiscussionBoardWithOrganization(),

      await associateEnrollmentWithStudent(),

      await associateEnrollmentWithCourse(),

      await associateEnrollmentWithOrganization(),

      await associateInstructorWithUser(),

      // Similar logic for "relation_many"

      await associateInstructorWithOrganization(),

      await associatePostWithDiscussion_board(),

      await associatePostWithUser(),

      await associatePostWithOrganization(),

      await associateStudentWithUser(),

      // Similar logic for "relation_many"

      await associateStudentWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('analytics', null, {});

    await queryInterface.bulkDelete('courses', null, {});

    await queryInterface.bulkDelete('discussion_boards', null, {});

    await queryInterface.bulkDelete('enrollments', null, {});

    await queryInterface.bulkDelete('instructors', null, {});

    await queryInterface.bulkDelete('posts', null, {});

    await queryInterface.bulkDelete('students', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
