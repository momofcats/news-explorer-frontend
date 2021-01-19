import { useState, useCallback } from "react";
const useForm = ({ onSubmit, validationRules }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    const validators = validationRules?.[name];
    if (validators) {
      validators.map((validator) => {
        const isValid = validator.rule(value);
        if (!isValid) {
          setErrors({ ...errors, [name]: validator.message(name) });
        }
        return errors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.entries(validationRules).forEach(([name, validators]) => {
      validators.forEach((validator) => {
        const isValid = validator.rule(values[name]);
        if (!isValid) {
          errors[name] = validator.message(name);
          console.log(errors);
        }
      });
    });
    setErrors({ ...errors });

    if (Object.keys(errors).length !== 0) {
      return;
    } else {
      onSubmit(values);
      resetForm();
    }
  };

  const resetForm = useCallback(() => {
    setValues({});
    setErrors({});
  }, [setValues, setErrors]);
  return {
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors,
  };
};

export default useForm;
