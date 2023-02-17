import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <>
      <div id="myElem1">
        <div class="cv-spinner">
          <span class="spinner"></span>
        </div>
      </div>
    </>
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
