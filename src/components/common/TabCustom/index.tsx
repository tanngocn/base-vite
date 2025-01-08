import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { FC, ReactElement } from 'react';
interface ITab {
  value: string;
  label: string;
  content: ReactElement;
}
interface ITabsProps {
  tabs: ITab[];
  classNames?: string;
}
const TabsCustom: FC<ITabsProps> = ({ tabs, classNames }) => {
  return (
    <div className={cn("shadow-lg rounded-lg", classNames)}>
      <Tabs defaultValue={tabs[0].value} className={cn('w-full')}>
        <TabsList>
          {tabs?.map((item: ITab, index: number) => (
            <TabsTrigger className="shadow-transparent" value={item.value} key={item.value + index}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs?.map((item: ITab, index: number) => (
          <TabsContent value={item.value} key={item.value + index}>
            {item.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsCustom;
