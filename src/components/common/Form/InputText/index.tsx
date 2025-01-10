import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { FC, ReactElement } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

interface IInputProps {
  field?: ControllerRenderProps<FieldValues, string>;
  prefix?: ReactElement;
  suffix?: ReactElement;
  placeholder?: string;
  classNames?: string;
  classInput?: string;
  onChange?: (value?:string) =>void;
}

const InputText: FC<IInputProps> = ({ prefix = <></>, suffix = <></>, field, classNames, placeholder, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field?.onChange(e.target?.value);
    !!onChange && onChange(e.target.value);
  };

  return (
    <div className={cn('flex items-center pl-2 pr-6 rounded-full bg-black text-white', classNames)}>
      {prefix}
      <Input className="bg-transparent border-0" placeholder={placeholder} onChange={handleChange} />
      {suffix}
    </div>
  );
};

export default InputText;
