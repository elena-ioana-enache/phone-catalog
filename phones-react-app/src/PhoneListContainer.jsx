import React from 'react';
import axios from 'axios';
import PhoneDetail from './PhoneDetail';




export default class PhoneListContainer extends React.Component {
  state = {
    phoneList: [],
    phoneListVisible: false,
    isPageLoaded: false,
    selectedPhone: undefined,
  }


  componentDidMount() {
    axios.get(`http://localhost:3001/phones`)
      .then(res => {
        const phoneList = res.data;
        this.setState({
          phoneList: phoneList,
          isPageLoaded: true,
          phoneListVisible: true,
        });
      })
  }

  onPhoneClick(phone) {
    console.log(phone);
    this.setState({
      phoneListVisible: false,
      selectedPhone: phone,
    })
  }
  onClickBackPhoneDetail() {
    this.setState({
      phoneListVisible: true,
    })
  }

  render() {

    return (
      <div>
        <div style={{ "display": this.state.isPageLoaded ? "none" : "block" }}> <i class="fa fa-refresh fa-spin pageCenter" ></i></div>
        <div style={{ "display": this.state.phoneListVisible ? "block" : "none" }}>
          <h1 class="title"><i className="fas fa-mobile-alt"></i>
            Phone list
        </h1>
          <ul>
            {this.state.phoneList.map(phone =>

              <li
                onClick={this.onPhoneClick.bind(this, phone)}
                class="listItem"
              >
                <div> 
                  <span>{phone.title+"  "+phone.price}</span>
                
                </div>
              </li>

            )}
          </ul>
        </div>
        <PhoneDetail
          onClickBack={this.onClickBackPhoneDetail.bind(this)}
          phone={this.state.selectedPhone}
          visible={!this.state.phoneListVisible}
        />

      </div>
    )
  }
}

