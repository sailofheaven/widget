import { bindActionCreators } from 'redux'
import React from 'react';
import { connect } from "react-redux";
import * as widgetActions from '../actions/widget-actions'


class WidgetSettings extends React.Component {
    state = {
        currency: ['Usd', 'Btc', 'Eth']
    }
    render() {
        const { config, widgetActions, className } = this.props;
        const { currency } = this.state;
        return (
            <div className={className + ' Settings'}>
                <label>
                    Currency :
                    <select value={config.currency} onChange={(e) => widgetActions.setCurrency(e.target.value)}>
                        {currency.map((e, ind) => <option key={'cur' + ind} value={e}>{e}</option>)}
                    </select>
                </label>

                <label>
                    Width :
                    <input type="number" value={config.width} onChange={(e) => widgetActions.setWidth(e.target.value)} />
                </label>
                <label>
                    Count :
                    <input
                        type="number"
                        value={config.num}
                        max="10"
                        onChange={(e) => { if (e.target.value > 20) return; widgetActions.setNum(e.target.value) }} />
                </label>


            </div>
        );
    }
}

const mapStateToProps = state => ({
    config: state.widget.config
});

const mapDispatchToProps = dispatch => {
    return {
        widgetActions: bindActionCreators(widgetActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WidgetSettings);