import React from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.less";
import { MapVisual } from "../mapVisual";

const mapStateToProps = (state) => {
  return { globalConfig: state.globalConfig };
};

// 创建大屏页面内容
const PageBuilder = (Childs) => {
  return connect(mapStateToProps)(class extends React.Component {
    static propTypes = {
      globalConfig: PropTypes.object.isRequired,
      route: PropTypes.object.isRequired
    }

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const { route, globalConfig } = this.props;
      document.title = `${route.label} | ${globalConfig.projectName}`;
    }

    render() {
      const { route } = this.props;

      return (
        <>
          <MapVisual />
          <div className="main">
            <header className="page-header">
              <img src={require(`../../../assets/${route.titlePath}`)} />
            </header>
            <Childs {...this.props} />
          </div>
        </>
      );
    }
  });
};

export default PageBuilder;
