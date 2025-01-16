import BigNumber from 'bignumber.js';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function roundPrice(value: string | number) {
  if (typeof value === 'string') {
    return new BigNumber(value).toFixed(2).toString();
  }
  return new BigNumber(value).toFixed(2).toString();
}
interface BarData {
  open: number;
  high: number;
  low: number;
  close: number;
  value?: number;
  color?: string;
}


export const generateBarData = (): BarData => {
  let nextBar: { date: Date; bar: BarData } = { date: new Date(), bar: {} as BarData };
  if (Object.keys(nextBar.bar).length === 0) {
    nextBar.bar = {
      open: 100,
      high: 104,
      low: 98,
      close: 103,

    };
  }
  nextBar.date.setDate(nextBar.date.getDate() + 1);

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
  nextBar.bar.color = nextBar.bar.close < nextBar.bar.open ? 'rgba(255, 128, 159, 1)' : 'rgba(107, 255, 193,1)';

  return nextBar.bar;
};



