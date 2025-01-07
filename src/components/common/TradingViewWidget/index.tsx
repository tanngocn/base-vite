import { useEffect, useRef, memo, FC } from 'react';

interface ITradingViewProps {
  tokenSymbol: string;
  height?: number;
  hideTopToolbar?: boolean;
  withdateranges?: boolean;
  hideSideToolbar?: boolean;
  showWatchlist?: boolean;
}

const TradingViewWidget: FC<ITradingViewProps> = ({
  height = 500,
  tokenSymbol = 'NASDAQ:AAPL',
  hideTopToolbar= false,
  hideSideToolbar = true,
  withdateranges = true,
}) => {
  const container = useRef<any>(null);
  const render = useRef<boolean>(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": ${tokenSymbol},
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "withdateranges": true,
          "hide_top_toolbar": ${hideTopToolbar ? 'true' : 'false'},
          "hide_side_toolbar": ${hideSideToolbar ? 'true' : 'false'},
          "locale": "en",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    if (render.current) {
      render.current = false;
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div style={{ height }} className="mt-4">
      <div className="tradingview-widget-container !h-full" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
