let Employees = [{
    "ID" : 1,
    "Name" : "Madan",
    "Designation" : "SoftwareEngineer",
    "EmpID" : "Emp01",
    "SkillSet" : ".net,Angular,AWS"
  },
  {
    "ID" : 2,
    "Name" : "Bavya",
    "Designation" : "Fresher",
    "EmpID" : "Emp02",
    "SkillSet" : ""
  },
  {
    "ID" : 3,
    "Name" : "Mounika",
    "Designation" : "SeniorEngineer",
    "EmpID" : "Emp03",
    "SkillSet" : "Java,AWS"
  },
  {
    "ID" : 4,
    "Name" : "Martin",
    "Designation" : "Tester",
    "EmpID" : "Emp04",
    "SkillSet" : "Selinium"
  },
  {
    "ID" : 5,
    "Name" : "Nitin",
    "Designation" : "DB Developer",
    "EmpID" : "Emp05",
    "SkillSet" : "AWS"
  },
  {
    "ID" : 6,
    "Name" : "Bhumika",
    "Designation" : "Tester",
    "EmpID" : "Emp06",
    "SkillSet" : "ManualTesting"
  },
  {
    "ID" : 7,
    "Name" : "Manisha",
    "Designation" : "Senior Constultant",
    "EmpID" : "Emp07",
    "SkillSet" : "AWS,Azure"
  },
  {
    "ID" : 8,
    "Name" : "Sumith",
    "Designation" : "Senior Consultant",
    "EmpID" : "Emp08",
    "SkillSet" : "Azure"
  },
  {
    "ID" : 9,
    "Name" : "Imran",
    "Designation" : "Manager",
    "EmpID" : "Emp09",
    "SkillSet" : ""
  }]

  let newEmployees=[];
  for(emp of Employees){
    if(emp.Designation=='Manager'){
        newEmployees.push(emp)
    }
  }
  console.log("All Employees");
  console.log(Employees);
  console.log("Designation shows only Manager");
  console.log(newEmployees);

  newEmployees=Employees.filter(
    (emp)=>{
        return emp.Name=='Sumith'
    }
    )