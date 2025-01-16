import InputSelect from '@/components/common/Form/InputSelect';
import InputText from '@/components/common/Form/InputText';
import FormGroupItem from '@/components/common/Form/Item';
import { FC, ReactElement } from 'react';
import {  FormProvider, useForm } from 'react-hook-form';
import { PROGRESS_OPTIONS } from '../../constants';
import { Button } from '@/components/ui/button';

const progressOptions = [
  {
    value: PROGRESS_OPTIONS.GRANDUATED,
    label: PROGRESS_OPTIONS.GRANDUATED,
  },
  {
    value: PROGRESS_OPTIONS.FUNDRAISING,
    label: PROGRESS_OPTIONS.FUNDRAISING,
  },
];
const agentOptions = [
  {
    value: 'agent 1',
    label: 'agent 1',
  },
  {
    value: 'agent 2',
    label: 'agent 2',
  },
];
interface IFilterBoxProps {
  onSearchParams: (values: unknown) => void;
  showChangeLayout?: boolean;
  onChangeLayout?: (layout: string) => void;
  children?: ReactElement;
}

const FilterBox: FC<IFilterBoxProps> = ({ onSearchParams, children }) => {
  const methods = useForm();
  const { handleSubmit, setValue, getValues } = methods;
  const onSubmit = (values: unknown) => {
    onSearchParams(values);
  };
  const handleChange = (value: string, name: string) => {
    console.log(value, name);

    setValue(name, value);
  };

  return (
    <div className="search-box flex items-center justify-between mb-4">
      <FormProvider {...methods}>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="flex gap-3 items-center">
          <FormGroupItem name="keyword">
            <InputText classInput="min-w-[400px]" placeholder="Search by agent name, token name, contract address" />
          </FormGroupItem>
          <FormGroupItem name="progress">
            <InputSelect options={progressOptions} placeholder="Progress" />
          </FormGroupItem>
          <FormGroupItem name="agent">
            <InputSelect options={agentOptions} placeholder="Agent Type" />
          </FormGroupItem>
          <Button
            type="button"
            variant={'outline'}
            className="text-primary border uppercase border-primary bg-transparent mt-2 h-14"
          >
            Reset
          </Button>
        </form>
      </FormProvider>
      {children}
    </div>
  );
};

export default FilterBox;
