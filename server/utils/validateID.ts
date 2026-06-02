// utils is the short for utilities which refers to a collection of helper functions or modules designed to perform common tasks on multiple functions

// These tasks often includes things like data validation, formtting or other repetitive operations that are used acress different parts of the application

import mongoose from "mongoose";

export const validateID = (id: string): boolean => {
  return mongoose.Types.ObjectId.isValid(id);
};
