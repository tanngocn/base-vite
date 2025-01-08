import { useEffect, useRef } from 'react';
import * as LightweightCharts from 'lightweight-charts';

interface BarData {
  time: { year: number; month: number; day: number };
  open: number;
  high: number;
  low: number;
  close: number;
  value?: number;
  color?: string;
}

function TradingViewChart(): React.ReactElement {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const render = useRef(true);

  useEffect(() => {
    const chartWrapper = document.getElementById('chart-wrapper');
    if ( chartWrapper) {
      const chart1 = LightweightCharts.createChart(chartWrapper, {
        width: chartWrapper.offsetWidth,
        height: chartWrapper.offsetHeight / 1.5,
        layout: {
          background: {
            color: '#253248',
          },
          textColor: '#fff',
          attributionLogo: false,
        },
        grid: {
          vertLines: {
            color: 'transparent',
          },
          horzLines: {
            color: 'rgba(256, 256, 256, 0.1)',
          },
        },
        crosshair: {
          mode: LightweightCharts.CrosshairMode.Normal,
        },
        rightPriceScale: {
          autoScale: true,
          // borderColor: "red",
          entireTextOnly: false,
          visible: true,
          // drawTicks: true,
          alignLabels: true,
          // invertScale: true,

          scaleMargins: {
            top: 0.1,
            bottom: 0,
          },
        },
        leftPriceScale: {
          borderColor: '#727FA4',
          entireTextOnly: true,
          visible: false,
          scaleMargins: {
            top: 0.5,
            bottom: 0.4,
          },
        },
        timeScale: {
          visible: false,
        },
      });
      const chart2 = LightweightCharts.createChart(chartWrapper, {
        width: chartWrapper.offsetWidth,
        height: 200,

        layout: {
          background: {
            color: '#253248',
          },
          textColor: '#fff',
        },
        grid: {
          vertLines: {
            color: 'transparent',
          },
          horzLines: {
            color: 'rgba(256, 256, 256, 0.1)',
          },
        },
        crosshair: {
          mode: LightweightCharts.CrosshairMode.Normal,
        },
        rightPriceScale: {
          autoScale: true,
          // borderColor: "red",
          entireTextOnly: false,
          visible: true,
          // drawTicks: true,
          alignLabels: true,
          // invertScale: true,

          scaleMargins: {
            top: 0.4,
            bottom: 0.15,
          },
        },
        leftPriceScale: {
          borderColor: '#727FA4',
          entireTextOnly: true,
          visible: false,
          scaleMargins: {
            top: 0.5,
            bottom: 0.4,
          },
        },
        timeScale: {
          borderColor: '#485158',
        },
      });
      render.current = false;

      const candleSeries = chart1.addCandlestickSeries({
        upColor: '#4bffb5',
        downColor: '#ff4976',
        borderDownColor: '#ff4976',
        borderUpColor: '#4bffb5',
        wickDownColor: '#ff4976',
        wickUpColor: '#4bffb5',
      });

      const volumeSeries = chart2.addHistogramSeries({
        priceLineVisible: false,
        lastValueVisible: false,
      });

      for (let i = 0; i < 150; i++) {
        const bar = generateBarData();
        candleSeries.update(bar);
      }
      for (let i = 0; i < 150; i++) {
        const barType = generateBarData('gray');
        volumeSeries.update(barType);
      }

      // Update data every 3 seconds
      const intervalId = setInterval(() => {
        const bar = generateBarData();
        candleSeries.update(bar);
      }, 3000);
      const intervalIdVolumne = setInterval(() => {
        const barType = generateBarData('gray');
        volumeSeries.update(barType);
      }, 3000);

      // Handle window resize
      const resizeHandler = () => {
        if (chart1) {
          chart1.applyOptions({
            width: chartWrapper!.offsetWidth,
            height: chartWrapper.offsetHeight / 1.5,
          });
          chart1.timeScale().fitContent();
        }
        if (chart2) {
          chart2.applyOptions({
            width: chartWrapper!.offsetWidth,
            height: 200,
          });
          chart2.timeScale().fitContent();
        }
      };
      chart1.timeScale().subscribeVisibleLogicalRangeChange((timeRange: any) => {
        chart2.timeScale().setVisibleLogicalRange(timeRange);
      });

      chart2.timeScale().subscribeVisibleLogicalRangeChange((timeRange: any) => {
        chart1.timeScale().setVisibleLogicalRange(timeRange);
      });

      function getCrosshairDataPoint(series: any, param: any) {
        if (!param.time) {
          return null;
        }
        const dataPoint = param.seriesData.get(series);
        return dataPoint || null;
      }

      function syncCrosshair(chart: any, series: any, dataPoint: any) {
        if (dataPoint) {
          chart.setCrosshairPosition(dataPoint.value, dataPoint.time, series);
          return;
        }
        chart.clearCrosshairPosition();
      }
      chart1.subscribeCrosshairMove((param) => {
        const dataPoint = getCrosshairDataPoint(candleSeries, param);
        syncCrosshair(chart2, volumeSeries, dataPoint);
      });
      chart2.subscribeCrosshairMove((param) => {
        const dataPoint = getCrosshairDataPoint(volumeSeries, param);
        syncCrosshair(chart1, candleSeries, dataPoint);
      });

      window.addEventListener('resize', resizeHandler);

      return () => {
        clearInterval(intervalId);
        clearInterval(intervalIdVolumne);
        window.removeEventListener('resize', resizeHandler);
      };
    }
  }, []);

  const generateBarData = (type = ''): BarData => {
    if (Object.keys(nextBar.bar).length === 0) {
      nextBar.bar = {
        open: 100,
        high: 104,
        low: 98,
        close: 103,
        time: {
          year: nextBar.date.getFullYear(),
          month: nextBar.date.getMonth() + 1,
          day: nextBar.date.getDate(),
        },
      };
    }
    nextBar.date.setDate(nextBar.date.getDate() + 1);
    nextBar.bar.time = {
      year: nextBar.date.getFullYear(),
      month: nextBar.date.getMonth() + 1,
      day: nextBar.date.getDate(),
    };

    let oldPrice = nextBar.bar.close;
    let volatility = 0.1;
    let rnd = Math.random();
    let changePercent = 2 * volatility * rnd;
    if (changePercent > volatility) changePercent -= 2 * volatility;

    let changeAmount = oldPrice * changePercent;
    nextBar.bar.open = nextBar.bar.close;
    nextBar.bar.close = oldPrice + changeAmount;
    nextBar.bar.high = Math.max(nextBar.bar.open, nextBar.bar.close) + Math.abs(changeAmount) * Math.random();
    nextBar.bar.low = Math.min(nextBar.bar.open, nextBar.bar.close) - Math.abs(changeAmount) * Math.random();
    nextBar.bar.value = Math.random() * 100;
    nextBar.bar.color = type
      ? '#f1f1f1'
      : nextBar.bar.close < nextBar.bar.open
      ? 'rgba(255, 128, 159, 1)'
      : 'rgba(107, 255, 193, 1)';

    return nextBar.bar;
  };

  let nextBar: { date: Date; bar: BarData } = { date: new Date(), bar: {} as BarData };

  return (
    <div id="chart-wrapper" className="mt-4" style={{ height: 500, width: 'calc(100%-64px)' }}>
      <div ref={chartContainerRef} />
    </div>
  );
}

export default TradingViewChart;
