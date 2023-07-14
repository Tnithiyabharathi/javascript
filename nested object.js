const houseNames = {
    firstRedHouse: {
      Names: {
        Girls: ["Priya", "Gayathri"],
        Boys: ["Praveen", "Nivin"]
      }
    },
    secondGreenHouse: {
      Names: {
        Girls: ["Kavya", "Sangeetha"],
        Boys: ["Mohan", "Siva"]
      }
    }
  };
  
  const firstHouseName = houseNames["firstRedHouse"].Names["Boys"];
  console.log(firstHouseName);  //praveen,nivin
  