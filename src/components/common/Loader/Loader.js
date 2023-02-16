import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-div">
        <svg
          className="loader-svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="loader-opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="loader-opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const ComponentCopy = class Component extends React.Component {
  count = 0;
  componentDidMount() {
    const comp = Component;
    comp.instance = this;
  }

  componentWillUnmount() {
    const comp = Component;
    delete comp.instance;
  }
  show() {
    this.count = this.count + 1;
    this.forceUpdate();
  }
  hide() {
    this.count = this.count - 1;
    if (this.count < 0) {
      this.count = 0;
    }
    this.forceUpdate();
  }
  hideAll() {
    this.count = 1;
    this.forceUpdate();
  }
  isVisible() {
    return this.count > 0;
  }

  render() {
    return this.count > 0 ? <Loader /> : null;
  }
};

export const CommonLoader = {
  Component: ComponentCopy,
  show() {
    ComponentCopy.instance.show();
  },
  hide() {
    ComponentCopy.instance.hide();
  },
  hideAll() {
    ComponentCopy.instance.hideAll();
  },
  isVisible() {
    return ComponentCopy.instance.isVisible();
  },
};
