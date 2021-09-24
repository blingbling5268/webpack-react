export interface FormItemObj {
  type: string;
  label: string;
  required: boolean;
  rules: string;
  message: string;
  keyValue: string;
}

export interface FormDataObj {
  label: string;
  required: boolean;
  rules: string;
  message: string;
  keyValue: string;
}

export interface ContextObj {
  formData: FormDataObj;
  setFormData: React.Dispatch<FormItemObj>;
}
