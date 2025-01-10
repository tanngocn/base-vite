import { FC, ReactElement } from 'react';

interface ITitleProps {
  title: string;
  children?: ReactElement;
}

const Title: FC<ITitleProps> = ({ children, title }) => {
  return (
    <div className="flex items-center mb-4 text-white">
      <h2>{title}</h2>
      {children}
    </div>
  );
};
export default Title;
