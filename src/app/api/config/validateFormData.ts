interface FormData {
  name?: string;
  mobile?: string;
  selectedProjectType?: string;
  selectedBudget?: string;
}

const validateFormData = (formData: FormData): boolean => {
  // Ensure that name is provided and not empty
  if (!formData.name || formData.name.trim() === "") {
    return false;
  }

  // Ensure that mobile number is provided and follows a valid format
  if (!formData.mobile || !/^\+?\d{10,13}$/.test(formData.mobile)) {
    return false;
  }

  // Other validation rules can be added as needed for selectedProjectType and selectedBudget

  return true;
};

export { validateFormData };
