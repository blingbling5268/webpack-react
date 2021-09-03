export interface FormItemObj {
  type: string;
  label: string;
  required: boolean;
  rules: string;
  message: string;
  keyValue: string;
}

export interface ContextObj {
  formData: FormItemObj;
  setFormData: React.Dispatch<FormItemObj>;
}
