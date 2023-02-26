import Actor from "../models/actor";

export const findAllActors = async () => {
  const results = await Actor.findAll();
  return results;
};

export const createActor = async () => {
  // return await Actor.create({
  //   id: 3,
  //   name: "Ila",
  //   age: 23,
  //   address: {
  //     id: 3,
  //     street_name: "test name",
  //     pincode: 634345,
  //   },
  //   {
  //     include: [
  //       {
  //         association: Actor
  //       }
  //     ]
  //   }
  // });
  // console.log("fromRepo", result);
  // return result;
};
