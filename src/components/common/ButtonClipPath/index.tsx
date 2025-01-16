import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface IButtonClipPath {
  txtBtn: string;
  onAction: () => void;
}

const ButtonClipPath: FC<IButtonClipPath> = ({ txtBtn, onAction }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-[-8px] left-[-8px] rectangle-top-left rotate-45  size-[16px] bg-black-100"></div>
      <Button variant={'default'} className="!rounded-sm !rounded-tl-[14px] !rounded-br-[14px]" onClick={onAction}>
        {txtBtn}
      </Button>
      <div className="absolute bottom-[-8px] right-[-8px] rectangle-top-left rotate-45 size-[16px] bg-black-100"></div>
    </div>
  );
};

export default ButtonClipPath;
