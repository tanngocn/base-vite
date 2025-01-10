import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React, { FC, ReactElement } from 'react';
import {  useFormContext } from 'react-hook-form';

interface IFormItemProps {
  children: ReactElement;
  description?: string;
  name: string;
  label?: string;
}

const FormGroupItem: FC<IFormItemProps> = ({ children, label, name, description }) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{React.cloneElement(children, {field})}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormGroupItem;
