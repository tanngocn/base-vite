import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { FC } from 'react';
import InputSelect from '../Form/InputSelect';
import { cn } from '@/lib/utils';
import { generatePaginationLinks } from './generatePage';

interface IPaginationProps {
  showPageSize?: boolean;
  onChangePageSize?: (value: string) => void;
  currentPage: number;
  pageSize: string;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  showPreviousNext: boolean;
}

const pageSizeOptions = [
  {
    value: '10',
    label: '10/page',
  },
  {
    value: '20',
    label: '20/page',
  },
  {
    value: '50',
    label: '50/page',
  },
];

const PaginationCustom: FC<IPaginationProps> = ({
  showPageSize,
  pageSize,
  showPreviousNext,
  currentPage,
  totalPages,
  onChangePageSize,
  onPageChange,
}) => {
  return (
    <div
      className={cn('flex justify-between items-center mt-4', {
        'justify-between': showPageSize,
        'justify-center': !showPageSize,
      })}
    >
      {showPageSize && (
        <InputSelect
          value={pageSize}
          classInput="!h-[30px]"
          options={pageSizeOptions}
          onChange={onChangePageSize}
          placeholder="10/page"
          isTable
        />
      )}
      <Pagination>
        <PaginationContent>
          {showPreviousNext && totalPages ? (
            <PaginationItem className="bg-black-400 rounded-md size-[30px] flex items-center justify-center text-white/40 border-black-300 border">
              <PaginationPrevious
                className={cn({
                  disabled: currentPage - 1 < 1,
                })}
                onClick={currentPage - 1 < 1 ? () => {} : () => onPageChange(currentPage - 1)}
              />
            </PaginationItem>
          ) : null}
          {generatePaginationLinks(currentPage, totalPages, onPageChange)}
          {showPreviousNext && totalPages ? (
            <PaginationItem className="bg-black-400 rounded-md size-[30px] flex items-center justify-center text-white/40 border-black-300 border">
              <PaginationNext
                className={cn({
                  disabled: currentPage > totalPages - 1,
                })}
                onClick={currentPage > totalPages - 1 ? () => {} : () => onPageChange(currentPage + 1)}
              />
            </PaginationItem>
          ) : null}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationCustom;
