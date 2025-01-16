import { useState } from 'react';
import { HOME_TAB, LAYOUT_LIST } from './constants';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import TableCustom from '@/components/common/TableCustom';
import { columns } from './components/MarketCapList/columns';
import { IMarketCap } from './constants/schema';
import FilterBox from './components/FilterBox';
import MarketCapGrid from './components/MarketCapGrid';
import Title from '@/components/common/Title';
import IconList from '@/assets/svg/IconList';
import IconCard from '@/assets/svg/IconCard';
import IconCoin from '@/assets/svg/IconCoin';
import IconClock from '@/assets/svg/IconClock';
const marketCapDataList: IMarketCap[] = [
  {
    id: '1',
    name: 'Bitcoin',
    price: 45000,
    change: 2.5,
    volume: 3500000000,
    marketCap: 850000000000,
    circulatingSupply: 18000000,
    totalSupply: 21000000,
    high: 46000,
    low: 44000,
    ath: 65000,
    atl: 1000,
    roi: 4500,
    time: '2023-10-01T12:00:00Z',
  },
  {
    id: '2',
    name: 'Ethereum',
    price: 3000,
    change: 1.8,
    volume: 2000000000,
    marketCap: 350000000000,
    circulatingSupply: 115000000,
    totalSupply: 120000000,
    high: 3200,
    low: 2900,
    ath: 4200,
    atl: 80,
    roi: 3700,
    time: '2023-10-01T12:00:00Z',
  },
  {
    id: '3',
    name: 'Cardano',
    price: 2.3,
    change: 3.2,
    volume: 1500000000,
    marketCap: 73000000000,
    circulatingSupply: 32000000000,
    totalSupply: 45000000000,
    high: 2.5,
    low: 2.1,
    ath: 3.1,
    atl: 0.02,
    roi: 11500,
    time: '2023-10-01T12:00:00Z',
  },
];
const tabs = [HOME_TAB.MARKET_CAP, HOME_TAB.NEW_PAIR];
const layouts = [LAYOUT_LIST.LIST, LAYOUT_LIST.GRID];
const HomePage = () => {
  const [currentTab, setCurrentTab] = useState<string>(HOME_TAB.MARKET_CAP);
  const [layout, setLayout] = useState<string>(LAYOUT_LIST.GRID);
  const handleChangeTab = (tab: string) => {
    setCurrentTab(tab);
  };

  const handleChangeLayout = (layout: string) => {
    setLayout(layout);
  };
  const handleSearchParams = (values: unknown) => {
    console.log(values);
  };

  return (
    <div className="home-page">
      <div className="container">
        <Title title="Explore AI Agents" />
        <FilterBox onSearchParams={handleSearchParams} showChangeLayout onChangeLayout={handleChangeLayout}>
          <div className="flex p-2 border-black-300 rounded-md bg-black-200 border w-fit gap-1">
            {layouts?.map((item, index: number) => (
              <Button
                className={cn('text-white capitalize h-10 w-10 rounded-[8px]  bg-transparent shadow-none text-[14px]', {
                  'bg-primary-100 icon-black': item === layout,
                  'icon-white': item !== layout,
                })}
                key={index}
                onClick={() => handleChangeLayout(item)}
              >
                {item === LAYOUT_LIST.LIST ? (
                  <IconList className="size-[24px]" />
                ) : (
                  <IconCard className="size-[24px]" />
                )}
              </Button>
            ))}
          </div>
        </FilterBox>
        <div className="flex p-2 border-black-300 rounded-md bg-black-200 border w-fit gap-1">
          {tabs?.map((item, index: number) => (
            <Button
              className={cn(
                'text-white capitalize rounded-[8px] min-w-[124px] bg-transparent shadow-none text-[14px]',
                {
                  'bg-primary text-black icon-black ': item === currentTab,
                  'icon-white': item !== currentTab,
                }
              )}
              key={index}
              onClick={() => handleChangeTab(item)}
            >
              {item === HOME_TAB.MARKET_CAP ? (
                <IconCoin className="size-[24px]" />
              ) : (
                <IconClock className="size-[24px]" />
              )}
              {item}
            </Button>
          ))}
        </div>
        {currentTab === HOME_TAB.MARKET_CAP && (
          <>
            {layout === LAYOUT_LIST.LIST && <TableCustom columns={columns as IMarketCap[]} data={marketCapDataList} />}
            {layout === LAYOUT_LIST.GRID && <MarketCapGrid />}
          </>
        )}
        {currentTab === HOME_TAB.NEW_PAIR && <>New Pair</>}
      </div>
    </div>
  );
};
export default HomePage;
