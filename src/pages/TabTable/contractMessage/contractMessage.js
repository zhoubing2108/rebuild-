import React, {
  Component
} from 'react';
import {
  Avatar,
  Button,
  Divider,
  Input,
} from 'antd';
import MyHeader from '../../../components/Header';
import style from './contractMessage.css';
import company from '../../../images/react.png';
import PDFViewer from '../../JoinUs';
const Action = props => {
  console.log(props)
  return (
    <div>
        <Button onClick={props.editCb}>{props.tr.edit
            ? '保存'
            : '编辑'}</Button>
        <Button onClick={props.tr.edit? props.saveCb: Number}>取消</Button>
      </div>
  );
};
class ContactMessage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      headers: {
        name: "属性",
        path: "值",
        action: "是否编辑"
      },
      trs: [{
          name: "合同名字",
          path: "周兵",
          action: "",
          edit: false,
        }, {
          name: "合同编号",
          path: "20",
          action: "",
          edit: false
        }, {
          name: "合同单位",
          path: "周兵",
          action: "",
          edit: false
        }, {
          name: "合同金额",
          path: "广东省湛江市xx",
          action: "",
          edit: false
        }, {
          name: "基站编码",
          path: "周兵",
          action: "",
          edit: false
        },

      ]
    };
  }
  onSave(data) {
    //点击取消按钮时还原该行为显示狀态
    //这里的onsave是指状态要变为非编辑，由编辑状态变点取消时会执行

    console.log('点击保存会有什么在data', data)
    data.edit = false;
    console.log('点击保存会有什么在data', data)
    if (data._initName !== undefined) {
      data.name = data._initName
      data.path = data._initPath
      //取消编辑会使用原来初始值;
      //  data._initName = data._initPath = undefined
      this.forceUpdate()
    }

  }
  onEdit(data) {
    //点击取消按钮时还原该行为编辑狀态，再点击还原
    //点击编辑会执行，点击暂时保存也会执行
    var editable = data.edit = !data.edit
    if (editable) {
      data._name = data.name
      data._initName = data.name
      data.name = <Input
            defaultValue={data._name}
            onInput={(e) => {
            data._name = e.target.value;
          }}/>
      data._path = data.path
      data._initPath = data.path
      data.path = <Input
            defaultValue={data._path}
            onInput={(e) => {
            data._path = e.target.value;
            let myname = data._name;//要改的那行数据
            // store.singleData_current.prototype = myname;
            if(myname == '合同名字'){
              store.singleData_current.address = e.target.value;
            }if(myname == '合同编号'){
              store.singleData_current.realname = e.target.value
            }if(myname == '合同单位'){
              store.singleData_current.age = e.target.value
            }if(myname == '合同金额'){
              store.singleData_current.nativePlace = e.target.value
            }if(myname == '基站编码'){
              store.singleData_current.phone = e.target.value
            }else{

            }

          }}/>
      this.forceUpdate()
    } else {
      data.name = data._name
      data.path = data._path
      this.forceUpdate()
    }
  }

  render() {
    let headers = this.state.headers || {};
    let keys = Object.keys(headers);
    return (
      <div>
        <MyHeader />
              <div style={{padding:'10px 10px 0 10px',fontSize:'16px'}}>
				        <span style={{width:'49%',height:'600px',backgroundColor:'#DDDDDD',float:'left',padding:'20px 20px 0px 20px'}}>
                  <Divider orientation="left" style={{color:'#FE7685'}}>合同信息，请谨慎更改</Divider>
                    <table className={style.mytable}>
                        <thead className={style.mythead}>
                        <tr className={style.mytr}>
                            {keys.map(key => <th className={style.myth}>
                            {headers[key]}
                            </th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.trs.map(function (tr,index) {
                            console.log('indexhrer',index);
                            console.log('tr',tr);
                            if(index<6){
                              return (
                                <tr className={style.mytr}>
                                {keys.map(function (key, index) {
                                    console.log('key',key);
                                    console.log('index',index);
                                      return (
                                        <td key={key} className={style.mytd}>
                                            {key === "action"
                                                ? <Action
                                                    tr={tr}
                                                    saveCb={this.onSave.bind(this, tr)}
                                                    editCb={this.onEdit.bind(this, tr)}/>
                                                : tr[key]
                                            }
                                        </td>
                                    )
                                    }, this)}
                                </tr>
                            )
                            } 
                            }, this)}
                        </tbody>
                    </table>
                    <Button style={{backgroundColor:'#FE7685',float:'right',marginTop:'40px',color:'white'}} onClick={this.saveMmMessage}>确认修改</Button>
                </span>

                <span style={{width:'49%',minHeight:'600px',backgroundColor:'#DDDDDD',float:'right',padding:'20px 20px 0px 20px'}}>
                    <div style={{padding:'20px 0px 0px 20px',marginBottom:'20px'}}>
                      <h4>合同封面</h4>
                      
                      <PDFViewer />
                    </div>
                </span>
            </div>
			</div>
    )
  }
}
export default ContactMessage;

// <Avatar shape="square" src={company} style={{width:'100%',height:'500px'}}/>