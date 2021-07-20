/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      {/*begin::Header Nav*/}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/dashboard"
          )}`}
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="menu-text">Dashboard</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>
        {/*end::1 Level*/}
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/dashboard"
          )}`}
        >
          <NavLink className="menu-link" to="/my-page">
            <span className="menu-text">MyPage</span>
            {layoutProps.rootArrowEnabled && <i className="menu-arrow" />}
          </NavLink>
        </li>

        <li
          data-menu-toggle={layoutProps.menuDesktopToggle}
          aria-haspopup="true"
          className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive(
            "/custom"
          )}`}
        >
          <NavLink className="menu-link menu-toggle" to="/custom">
            <span className="menu-text">Custom</span>
            <i className="menu-arrow"></i>
          </NavLink>
          <div className="menu-submenu menu-submenu-classic menu-submenu-left">
            <ul className="menu-subnav">
              {/*begin::2 Level*/}
              <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/e-commerce"
                )}`}
                data-menu-toggle="hover"
                aria-haspopup="true"
              >
                <NavLink className="menu-link menu-toggle" to="/e-commerce">
                  <span className="menu-text">eCommerce</span>
                  <i className="menu-arrow" />
                </NavLink>
                <div
                  className={`menu-submenu menu-submenu-classic menu-submenu-right`}
                >
                  <ul className="menu-subnav">
                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/e-commerce/customers"
                      )}`}
                    >
                      <NavLink className="menu-link" to="/e-commerce/customers">
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Customers</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}

                    {/*begin::3 Level*/}
                    <li
                      className={`menu-item ${getMenuItemActive(
                        "/e-commerce/products"
                      )}`}
                    >
                      <NavLink className="menu-link" to="/e-commerce/products">
                        <i className="menu-bullet menu-bullet-dot">
                          <span />
                        </i>
                        <span className="menu-text">Products</span>
                      </NavLink>
                    </li>
                    {/*end::3 Level*/}
                  </ul>
                </div>
              </li>
              {/*end::2 Level*/}

              {/*end::3 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </ul>
      {/*end::Header Nav*/}
    </div>
  );
}
