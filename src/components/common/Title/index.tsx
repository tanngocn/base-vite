import { FC, ReactElement } from 'react';

interface ITitleProps {
  title: string;
  children?: ReactElement;
}

const Title: FC<ITitleProps> = ({ children, title }) => {
  return (
    <div className="flex items-center mb-4 text-white border-b border-black-300 pb-[22px]">
      <h2 className='title-24'>{title}</h2>
      {children}
    </div>
  );
};
export default Title;
