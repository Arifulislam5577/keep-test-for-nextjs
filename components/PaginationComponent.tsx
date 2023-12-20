"use client";
import { Pagination } from "keep-react";
import { useState } from "react";

export const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="flex flex-col gap-5">
      <Pagination
        currentPage={currentPage}
        onPageChange={(val) => setCurrentPage(val)}
        totalPages={30}
        iconWithOutText
        prevNextShape="roundSquare"
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        iconWithOutText={true}
        paginateWithBorder={true}
        prevNextShape="circle"
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        iconWithText={true}
        prevNextShape="circle"
        activeCurrentPageShape="circle"
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={30}
        iconWithOutText={true}
        prevNextShape="none"
        showGoToPaginate={true}
      />
    </div>
  );
};
