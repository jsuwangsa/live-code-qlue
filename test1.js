// Ubahlah object response dibawah ini menjadi seperti yang ada di expected output

function manipulate_data(res) {
  // code here
  let response = res.data;
  let manipulated = [];

  for (let i = 0; i < response.length; i++) {
    let data = { id: "", full_name: "", expert_skills: [] };
    data.id = response[i].id;
    data.full_name = response[i].first_name + " " + response[i].last_name;
    let expert = response[i].skills;
    let keys = Object.keys(response[i].skills);
    keys.forEach((key) => {
      if (expert[key] === "expert") {
        data.expert_skills.push(key);
      }
    });
    manipulated.push(data);
  }
  return manipulated;
}

const response = {
  message: "Success to get data",
  data: [
    {
      id: "1",
      first_name: "John",
      last_name: "Doe",
      skills: {
        javascript: "advanced",
        python: "basic",
        golang: "expert",
        php: "expert",
      },
    },
    {
      id: "2",
      first_name: "Will",
      last_name: "Smith",
      skills: {
        javascript: "expert",
        python: "basic",
        golang: "advanced",
        php: "advanced",
      },
    },
    {
      id: "3",
      first_name: "Jaden",
      last_name: "Smith",
      skills: {
        javascript: "expert",
        python: "expert",
        golang: "expert",
        php: "expert",
      },
    },
    {
      id: "4",
      first_name: "El",
      last_name: "Professor",
      skills: {
        javascript: "advanced",
        python: "basic",
        golang: "intermediate",
        php: "intermediate",
      },
    },
  ],
};

console.log(manipulate_data(response));
// expected output:
// [
//   {
//     id: '1',
//     full_name: 'John Doe',
//     expert_skills: [ 'golang', 'php' ]
//   },
//   { id: '2', full_name: 'Will Smith', expert_skills: [ 'javascript' ] },
//   {
//     id: '3',
//     full_name: 'Jaden Smith',
//     expert_skills: [ 'javascript', 'python', 'golang', 'php' ]
//   },
//   { id: '4', full_name: 'El Professor', expert_skills: [] }
// ]
