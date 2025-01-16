import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { IMarketCap } from "../../constants/schema";

export const columns: ColumnDef<IMarketCap>[] = [
  {
    accessorKey: 'ai-agent',
    header: () => {
      return <Button variant="ghost">AI Agent</Button>;
    },
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img src="" alt="token-image" />
        <div className="info flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <h4 className="text-md font-semibold">Bitcoin</h4>
            <p className="text-sm text-gray-500">SYMBOL</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-md font-semibold">Address</span>
            <span className="text-sm text-gray-500">type</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'progress',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Progress
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'marketCap',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Market Cap
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('marketCap')}</div>,
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Token price
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('price')}</div>,
  },
  {
    accessorKey: '24h',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        24h Change
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('price')}</div>,
  },
  {
    accessorKey: 'holder',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Holders
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('price')}</div>,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Created Date
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('createdAt')}</div>,
  },
];
