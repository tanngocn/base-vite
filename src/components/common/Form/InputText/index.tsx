import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { FC, ReactElement } from 'react';

interface IInputProps {
  prefix?: ReactElement;
  suffix?: ReactElement;
  classNames?: string;
  classInput?: string; 
}

const InputText: FC<IInputProps> = ({ prefix = <></>, suffix = <></>, classNames }) => {
  return (
    <div className={cn('flex items-center px-2 rounded-full', classNames)}>
      {prefix}
      <Input className="bg-transparent border-0" />
      {suffix}
    </div>
  );
};

export default InputText;
