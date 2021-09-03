import React from 'react';
import { ContextObj } from './interface';

export const AppContext = React.createContext<ContextObj>({
  formData: {
    type: '',
    label: '',
    required: false,
    rules: '',
    message: '',
    keyValue: '',
  },
  setFormData: () => {
    return {};
  },
});
