import React, { useState, useEffect } from "react";
import "./style.scss";
function* range(start: number, end: number) {
  while (start < end) {
    yield start;
    start += 1;
  }
}

const Pagination: React.FC<{
  activePage: number;
  pagecount: number;
  totalcount?: number;
  prevBtn?: any;
  nextBtn?: any;
  ellipsis?: any;
  handlePage?: any;
}> = ({
  activePage,
  pagecount,
  totalcount,
  prevBtn: PrevBtn,
  nextBtn: NextBtn,
  ellipsis: Ellipsis,
  handlePage,
}) => {
  // const [activePage, handlePage] = useState(initialActivePage);

  const generatePages = () => {
    if (pagecount <= 6) {
      const pages = Array.from(range(1, pagecount + 1));
      return pages.map((page) => (
        <button
          type="button"
          key={`btn-page-${page}`}
          className={page === activePage ? "is-active" : ""}
          onClick={(e: any) => {
            e.target.focus();
            handlePage(page);
          }}
        >
          {page}
        </button>
      ));
    }

    if (pagecount - activePage <= 4) {
      const first = Array.from(range(pagecount - 4, pagecount + 1));

      return (
        <>
          <Ellipsis />
          {first.map((page) => (
            <button
              key={`btn-page-${page}`}
              type="button"
              className={page === activePage ? "is-active" : ""}
              onClick={(e: any) => {
                e.target.focus();
                handlePage(page);
              }}
            >
              {page}
            </button>
          ))}
        </>
      );
    } else {
      const first =
        activePage === 1
          ? Array.from(range(activePage, activePage + 3))
          : Array.from(range(activePage - 1, activePage + 2));
      const end = Array.from(range(pagecount - 1, pagecount + 1));

      return (
        <>
          {first.map((page) => (
            <button
              key={`btn-page-${page}`}
              type="button"
              className={page === activePage ? "is-active" : ""}
              onClick={(e: any) => {
                e.target.focus();
                handlePage(page);
              }}
            >
              {page}
            </button>
          ))}
          <Ellipsis />
          {end.map((page) => (
            <button
              key={`btn-page-${page}`}
              type="button"
              className={page === activePage ? "is-active" : ""}
              onClick={(e: any) => {
                e.target.focus();
                handlePage(page);
              }}
            >
              {page}
            </button>
          ))}
        </>
      );
    }
  };
  return (
    <div className="pagination">
      <section className="btn-page">
        <PrevBtn
          disabled={activePage === 1}
          onClick={() => handlePage(activePage - 1)}
        />
      </section>
      <section className="btn-page">{generatePages()}</section>
      <section className="btn-page">
        <NextBtn
          disabled={activePage === pagecount}
          onClick={() => handlePage(activePage + 1)}
        />
      </section>
      <section className="total">{`Count ${totalcount}`}</section>
    </div>
  );
};

export default Pagination;
