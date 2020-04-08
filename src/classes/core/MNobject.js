import { FieldTypes ,Errors,Fieldwidth } from 'src/classes/core/Types'
import  MNfield  from "./MNfield";
export default class MNobject {


  constructor() {

    this.sqlFields =
    {
      ID: new MNfield("ID",Fieldwidth.small,-1),
    }


  }
  delete() {
    delete this.sqlFields.ID
    this.getSqlFields()
  }
  fnAddField = (name,value) => {
    const obj= {
      name: name,
      type: '',
      label: '',
      width: -1,
      readOnly: false,
      value: value
    }
    if (!(name in Object.keys(this.sqlFields))){
      this.sqlFields['name']=obj
    }else{
      throw Errors.propertyExistsError
    }
  }

  fnUpdateField = (name,value) => {
    const obj= {
      name: name,
      type: '',
      label: '',
      width: -1,
      readOnly: false,
      value: value
    }
    if (!(name in Object.keys(this.sqlFields))){
      this.sqlFields['name']=obj
    }else{
      throw Errors.propertyExistsError
    }
  }

  getSqlFields() {
    console.log(this.sqlFields)
  }
}

const obj = new MNobject()

obj.getSqlFields();