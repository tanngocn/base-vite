import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { FC, ReactElement } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

interface IInputProps {
  field?: ControllerRenderProps<FieldValues, string>;
  prefix?: ReactElement | undefined  ;
  suffix?: ReactElement | undefined;
  placeholder?: string;
  classNames?: string;
  classInput?: string;
  onChange?: (value?:string) =>void;
}

const InputText: FC<IInputProps> = ({
  prefix = undefined,
  suffix = undefined,
  field,
  classNames,
  placeholder,
  onChange,
  classInput,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field?.onChange(e.target?.value);
    !!onChange && onChange(e.target.value);
  };

  return (
    <div className={cn('flex items-center mt-0 rounded-md border border-black-300 text-white', classNames , {
      'pl-2': prefix,
      'pr-6': suffix
    })}>
      {prefix}
      <Input
        className={cn('bg-black-200 border-0 w-full', classInput)}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {suffix}
    </div>
  );
};

export default InputText;
