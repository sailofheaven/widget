import React from 'react';
import { connect } from "react-redux";
import { getCurrencies } from '../actions/widget-actions'
import { draw } from '../utils/widget';

class WidgetPreview extends React.Component {
    componentDidMount() {
        this.props.dispatch(getCurrencies());
    }

    render() {
        const { data, config } = this.props;
        return (
            <div>
                <div id="preview" ></div >
                {data && draw(data, 'preview', config, true)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.widget.data,
    config: state.widget.config
});


export default connect(mapStateToProps)(WidgetPreview);