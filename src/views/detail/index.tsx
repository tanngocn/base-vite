import TabsCustom from '@/components/common/TabCustom';
import TradingViewChart from '@/components/common/TradingViewChart';
import SwapBox from './components/Swap';

const tabs = [
  {
    value: 'sumary',
    label: 'Sumary',
    content: (
      <div className="p-4">
        <h2>this sumary content</h2>
      </div>
    ),
  },
  {
    value: 'holders',
    label: 'Holders',
    content: (
      <div className="p-4">
        <h2>this holders content</h2>
      </div>
    ),
  },
];
const DetailPage = () => {
  return (
    <div>
      <div className="container  mt-4">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 col-span-8 rounded-lg p-4 bg-black flex flex-col gap-12">
            <TradingViewChart />
            <TabsCustom classNames="border" tabs={tabs} />
          </div>
          <div className="col-span-12 col-span-4">
            <SwapBox />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
