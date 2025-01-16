import { PaginationEllipsis, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

export const generatePaginationLinks = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void
) => {
  const pages: JSX.Element[] = [];
  if (totalPages <= 6) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem
          key={i}
          className={cn('bg-black-400 rounded-md size-[30px] flex items-center justify-center', {
            '!bg-primary': i === currentPage,
          })}
        >
          <PaginationLink onClick={() => onPageChange(i)} isActive={i === currentPage}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      pages.push(
        <PaginationItem key={i} className={cn('bg-black-400 rounded-md size-[30px] flex items-center justify-center', {
          '!bg-primary': i === currentPage
        })}>
          <PaginationLink  onClick={() => onPageChange(i)} isActive={i === currentPage}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    if (2 < currentPage && currentPage < totalPages - 1) {
      pages.push(<PaginationEllipsis />);
      pages.push(
        <PaginationItem
          key={currentPage}
          className="bg-black-400 rounded-md size-[30px] flex items-center justify-center"
        >
          <PaginationLink onClick={() => onPageChange(currentPage)} isActive={true}>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
      );
    }
    pages.push(<PaginationEllipsis />);
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem
          key={i}
          className={cn('bg-black-400 rounded-md size-[30px] flex items-center justify-center', {
            '!bg-primary': i === currentPage,
          })}
        >
          <PaginationLink onClick={() => onPageChange(i)} isActive={i === currentPage}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
  }
  return pages;
};
