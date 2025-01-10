import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TAB_TRADE } from "../../constants";
import BuyToken from "./Buy";

const tabs = [TAB_TRADE.BUY, TAB_TRADE.SELL]
const SwapBox = ()=>{

    const [currentTab, setCurrentTab] = useState<string>(TAB_TRADE.BUY);
    const onChangeTab = (tab:string)=>{
        setCurrentTab(tab);
    }
    return (
      <div className="swap-box box">
        <Title title="Swap" />
        <div className="flex items-center justify-between gap-2 mb-4">
          {tabs?.map((item, index: number) => (
            <Button className="w-full capitalize" onClick={()=>onChangeTab(item)} variant={'default'} key={index}>
              {item}
            </Button>
          ))}
        </div>

        {currentTab === TAB_TRADE.BUY && <BuyToken/>}

      </div>
    );
}
export default SwapBox;