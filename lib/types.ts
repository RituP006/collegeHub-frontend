export interface College {
  city: string;
  country: string;
  createdAt: string;
  name: string;
  publishedAt: string;
  rate: number;
  slug: string;
  state: string;
  updatedAt: string;
  yearFounded: number;
  courses: [];
  students: [];
}

export interface Course {
  id: number;
  attributes: {
    courseName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

// export const Courses = {
//   IT: "Information Technology",
//   CS: "Computer Science",
//   Elect: "Electrical Engineering",
//   Mech: "Mechanical Engineering",
//   Civil: "Civil Engineering",
//   Chem: "Chemical Engineering",
//   Bio: "Biomedical Engineering",
//   Aero: "Aerospace Engineering",
//   List: [
//     "Information Technology",
//     "Computer Science",
//     "Electrical Engineering",
//     "Mechanical Engineering",
//     "Civil Engineering",
//     "Chemical Engineering",
//     "Biomedical Engineering",
//     "Aerospace Engineering",
//   ],
// };

export const Courses = [
  {
    name: "IT",
    desc: "Information Technology",
  },
  {
    name: "CS",
    desc: "Computer Science",
  },
  {
    name: "Elect",
    desc: "Electrical Engineering",
  },
  {
    name: "Mech",
    desc: "Mechanical Engineering",
  },
  {
    name: "Civil",
    desc: "Civil Engineering",
  },
  {
    name: "Chem",
    desc: "Chemical Engineering",
  },
  {
    name: "Bio",
    desc: "Biomedical Engineering",
  },
  {
    name: "Aero",
    desc: "Aerospace Engineering",
  },
];
