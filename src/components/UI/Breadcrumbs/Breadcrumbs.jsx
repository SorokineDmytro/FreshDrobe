import React from "react";
import { customRouteNames } from "../../../../data/customRouteNames";
import { Link, useLocation } from "react-router";

const Breadcrumbs = ({ customLastCrumb }) => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter(Boolean);

  // Custom names for specific routes
  // Utility: Convert "user-profile" → "User Profile"
  const formatSegment = (segment) =>
    customRouteNames[segment] ||
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <ul className="flex text-[13px] text-gray-600 mb-2">
      {/* Always render home */}
      <li>
        <Link
          to="/"
          className="hover:text-primary hover:underline transition duration-200 ease-in-out"
        >
          Accueil
        </Link>
        {pathnames.length > 0 && (
          <span className="mx-3 text-custom-gray">/</span>
        )}
      </li>

      {customLastCrumb ? (
        <li className="text-custom-gray">{customLastCrumb}</li>
      ) : (
        pathnames.map((segment, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          const name = formatSegment(segment);

        return (
            <li key={routeTo} className="flex items-center">
              {!isLast ? (
                <>
                  <Link to={routeTo} className="hover:text-primary hover:underline transition duration-200 ease-in-out">
                    {name}
                  </Link>
                  <span className="mx-3 text-custom-gray">/</span>
                </>
              ) : (
                <span className="text-custom-gray">{name}</span>
              )}
            </li>
          );
        })
      )}
    </ul>
  );
};

export default Breadcrumbs;
