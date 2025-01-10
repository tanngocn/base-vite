import InputText from '@/components/common/Form/InputText';
import FormGroupItem from '@/components/common/Form/Item';
import { Form } from '@/components/ui/form';
import { AMOUNT_BUY } from '@/views/detail/constants';
import { buySchema } from '@/views/detail/constants/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import SDMIcon from '@/assets/svg/sdm_icon.svg'
import { Button } from '@/components/ui/button';

const amounts = [AMOUNT_BUY.TEN, AMOUNT_BUY.ONEHUNDRED, AMOUNT_BUY.ONETHOUSAND];
const BuyToken = () => {
  const onChangeAmount = (value: number) => {};

  const methods = useForm({
    defaultValues: {
      amount: 0,
    },
    resolver: zodResolver(buySchema),
  });

  const { handleSubmit, getValues } = methods;

  const onSubmit = (values: any) => {
    // TODO
    console.log(values, 'ahahah');
  };

  

  return (
    <div className="buy-token flex flex-col gap-2 ">
      <Form {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="balance flex justify-end">
            <span className="rounded-full text-[14px] bg-black/80"> value - balance SYMBOL</span>
          </div>
          <FormGroupItem name="amount">
            <InputText
              placeholder="0"
              suffix={
                <div className="flex items-center gap-1">
                  SDM
                  <img src={SDMIcon} alt="symbol" />
                </div>
              }
            />
          </FormGroupItem>

          <div className="flex items-center gap-1">
            {amounts?.map((item, index: number) => (
              <div
                className="rounded-md justify-center p-1 cursor-pointer flex items-center bg-black gap-1"
                key={index}
                onClick={() => onChangeAmount(item)}
              >
                <span className="text-white">{item}</span>
                <img src={SDMIcon} alt="SYM" className="size-[16px]" />
              </div>
            ))}
          </div>

          <Button type='submit' className='w-full'> Submit</Button>
        </form>
      </Form>
    </div>
  );
};
export default BuyToken;
