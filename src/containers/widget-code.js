import React from 'react';
import { connect } from "react-redux";
import { getCode } from '../utils/widget';

class WidgetCode extends React.Component {

    copy() {
        const textarea = document.createElement('textarea')
        textarea.id = 'temp_element'
        textarea.style.height = 0
        document.body.appendChild(textarea)
        textarea.value = this.codeRef.innerText
        const selector = document.querySelector('#temp_element')
        selector.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        alert("text copied");
    }
    render() {
        const { config } = this.props;
        return (
            <div className="code-preview" onClick={() => this.copy()}>
                <code ref={e => this.codeRef = e}>
                    {`<script>(${getCode()})(${JSON.stringify(config)})</script>`}
                </code>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    config: state.widget.config
});


export default connect(mapStateToProps)(WidgetCode);