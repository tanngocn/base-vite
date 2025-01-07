import TradingViewWidget from "@/components/common/TradingViewWidget";

const DetailPage = () => {
  return (
    <div>
      <div className="container">
        <TradingViewWidget tokenSymbol="NASDAQ:GOOG" />
      </div>
    </div>
  );
};
export default DetailPage;
