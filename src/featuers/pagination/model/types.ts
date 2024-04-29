export interface IPaginationProps {
  onChange: (value: number | string) => void;
  page: number;
  totalPages: number;
}
