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
  page: number;
  prevBtn: any;
  nextBtn: any;
  ellipsis: any;
}> = ({
  page,
  activePage: initialActivePage,
  prevBtn: PrevBtn,
  nextBtn: NextBtn,
  ellipsis: Ellipsis,
}) => {
  const [activePage, setActivePage] = useState(initialActivePage);

  const generatePages = () => {
    if (page <= 6) {
      const pages = Array.from(range(1, page + 1));
      return pages.map((page) => (
        <button
          type="button"
          key={`btn-page-${page}`}
          className={page === activePage ? "is-active" : ""}
          onClick={(e: any) => {
            e.target.focus();
            setActivePage(page);
          }}
        >
          {page}
        </button>
      ));
    }

    if (page - activePage <= 4) {
      const first = Array.from(range(page - 4, page + 1));

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
                setActivePage(page);
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
      const end = Array.from(range(page - 1, page + 1));

      return (
        <>
          {first.map((page) => (
            <button
              key={`btn-page-${page}`}
              type="button"
              className={page === activePage ? "is-active" : ""}
              onClick={(e: any) => {
                e.target.focus();
                setActivePage(page);
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
                setActivePage(page);
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
          onClick={() => setActivePage(activePage - 1)}
        />
      </section>
      <section className="btn-page">{generatePages()}</section>
      <section className="btn-page">
        <NextBtn
          disabled={activePage === page}
          onClick={() => setActivePage(activePage + 1)}
        />
      </section>
    </div>
  );
};

export default Pagination;
