

const list_1 = [
    {
      firstName: "Kiran",
      lastName: "Kumar",
      sex: "Female",
      salary: 25000,
    },
    {
      firstName: "Mohan",
      lastName: "Srivastav",
      sex: "Male",
      salary: 21000,
    },
    {
      firstName: "Mary",
      lastName: "Kom",
      sex: "Female",
      salary: 13000,
    },
    {
      firstName: "Mary",
      lastName: "Kom",
      sex: "Female",
      salary: 43000,
    },
    {
      firstName: "Brian",
      lastName: "Doe",
      sex: "Male",
      salary: 23000,
    },
    {
      firstName: "Brian",
      lastName: "David",
      sex: "Male",
      salary: 23000,
    },
    {
      firstName: "Brian",
      lastName: "Devin",
      sex: "Male",
      salary: 23000,
    },
    {
      firstName: "James",
      lastName: "Bond",
      sex: "Male",
      salary: 19000,
    },
    {
      firstName: "Agrey",
      lastName: "Stank",
      sex: "Male",
      salary: 11000,
    },
  ];

  // Create a second list as a copy of the first
  const list_2 = [...list_1];

  //Sorting array objects by firstName then by lastName if firstName and lastName are the same
  list_1 .sort((a, b) => {
    let A = a.firstName.toUpperCase()
    let B = b.firstName.toUpperCase()
    if (A > B) return 1
    if (A < B) return -1
    // But if firstName and lastName are the same
    A = a.lastName.toUpperCase()
    B = b.lastName.toUpperCase()
    if (A > B) return 1
    if (A < B) return -1
    // Always return zero if last names are also the same. You may however implement more sorting logic such as sex if need be
    return 0;
  })

  console.log("Sorted List 1: ",  list_1)


  /**
   * Sorting none ASCII Characters using locales
   */

  list_2.sort((a,b) => {
    return a.firstName
    .toLocaleLowerCase()
    .localeCompare(b.firstName.toLocaleLowerCase())
  });

  console.log("Sorted List 2: ", list_2)