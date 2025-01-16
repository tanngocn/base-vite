import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface IItem{
    label: string;
    value: string;
}

interface IInputSelectProps {
  options: IItem[];
  field?: ControllerRenderProps<FieldValues, string>;
  value?: string;
  classNames?: string;
  classInput?: string;
  placeholder?: string;
  onChange?: (value: string, name:string) => void;
  isTable?:boolean;
}

const InputSelect: FC<IInputSelectProps> = ({
  field,
  isTable = false,  
  options,
  value,
  onChange,
  placeholder,
  classNames,
  classInput,
}) => {
  const handleChange = (value: string) => {
    field?.onChange(value);
    !!onChange && onChange(value, String(field?.name));
  };

  return (
    <div className={cn(classNames)}>
      <Select value={value ? String(value) : field?.value} onValueChange={handleChange}>
        <SelectTrigger className={cn('border rounded-md text-white border-black-300 bg-black-200', { classInput }, {
          'text-white/60': !value || !field?.value,
          'text-white': value || field?.value,
          'h-[30px] min-w-[96px] content-14': isTable,
          'h-14 min-w-[150px]': !isTable,
        })}>
          {isTable && <SelectValue placeholder={placeholder}>{value}/page</SelectValue>}
          {!isTable && <SelectValue placeholder={placeholder} />}
        </SelectTrigger>
        <SelectContent className="bg-black text-white">
          {options?.map((item: IItem, index: number) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
          <Button
            className="w-full px-2"
            variant="default"
            size="sm"
            onClick={(e:any) => {
              e.stopPropagation();
              field?.onChange('');
            }}
          >
            Clear
          </Button>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InputSelect;