import toast from "react-hot-toast";

// Function to handle first API errors properly
export const handleFirstApiErrors = (errorData: any) => {
  if (errorData.errors) {
    const errorFields = Object.keys(errorData.errors);

    if (errorFields.length > 0) {
      const firstField = errorFields[0];
      const firstError = errorData.errors[firstField];

      if (Array.isArray(firstError) && firstError.length > 0) {
        toast.error(`${firstField}: ${firstError[0]}`);
      } else if (typeof firstError === "string") {
        toast.error(`${firstField}: ${firstError}`);
      } else {
        toast.error("Validation error occurred");
      }
    } else {
      toast.error("Validation error occurred");
    }
  } else if (errorData.message) {
    toast.error(errorData.message);
  } else {
    toast.error("Failed to create account");
  }
};

// Function to handle second API errors properly
export const handleSecondApiErrors = (errorData: any) => {
  if (errorData.errors) {
    const errorFields = Object.keys(errorData.errors);

    if (errorFields.length > 0) {
      const firstField = errorFields[0];
      const firstError = errorData.errors[firstField];

      if (Array.isArray(firstError) && firstError.length > 0) {
        toast.error(`${firstField}: ${firstError[0]}`);
      } else if (typeof firstError === "string") {
        toast.error(`${firstField}: ${firstError}`);
      } else {
        toast.error("Validation error occurred");
      }
    } else {
      toast.error("Validation error occurred");
    }
  } else if (errorData.message) {
    toast.error(errorData.message);
  } else {
    toast.error("Failed to save details");
  }
};
