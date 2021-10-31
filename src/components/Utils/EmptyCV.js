const emptyCV = {
  personalInfo: {
    name: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    summary: "",
  },
  employment: [
    {
      id: Date.now() + Math.random(),
      company: "",
      designation: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  education: [
    {
      id: Date.now() + Math.random(),
      program: "",
      university: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
};

export default emptyCV;
