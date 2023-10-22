import { Link } from "react-router-dom";

import "./category.css";

const Category = () => {
  return (
    <div className="page-content">
      <div className="container">
        <div className="row">
          <aside className="col-lg-3">
            <div className="sidebar sidebar-shop">
              <div className="side-widget widget-clean d-flex justify-content-between">
                <label>Filter:</label>
                <Link className="sidebar-filter-clear">Clean All</Link>
              </div>
            </div>
          </aside>
          <div className="col-lg-9">
            <div className="toolbox"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
