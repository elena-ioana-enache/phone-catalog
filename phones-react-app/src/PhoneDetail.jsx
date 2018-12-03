import React from 'react';


export default class PhoneDetail extends React.Component {

    onClickBack() {
        if (this.props.onClickBack) {
            this.props.onClickBack();
        }
    }
    render() {
        if (!this.props.phone) {
            return null;
        }
        //imageInBase64
        return (
            <div style={{ "display": this.props.visible ? "block" : "none" }}>
                <div style={{ "textAlign": "center" }}>
                    <div>{this.props.phone.title}</div>

                    <img src={"data:image/png;base64," + this.props.phone.imageInBase64}
                        alt={this.props.phone.title}

                    />
                    <div>{this.props.phone.price}</div>
                    <div>{this.props.phone.description}</div>
                </div>
                <input  className="backButton" type="button" value="Back" onClick={this.onClickBack.bind(this)} />
            </div>
        );
    }

}


