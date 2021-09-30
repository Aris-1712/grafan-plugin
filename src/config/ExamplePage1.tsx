// Libraries
import React, { PureComponent } from 'react';

// Types
import { PluginConfigPageProps, AppPluginMeta } from '@grafana/data';

import { ExampleAppSettings } from 'types';
import { Button, Input } from '@grafana/ui';

interface Props extends PluginConfigPageProps<AppPluginMeta<ExampleAppSettings>> { }

export class ExamplePage1 extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  state={
    name:"",number:""
  }
  render() {
    // const { query } = this.props;
    
    return (
      <div>
        <Input placeholder="Text Area 1" onChange={(e)=>{
          this.setState({name:e.target.value})
        }}></Input>
        <p>{this.state.name}</p>
        <Input placeholder="Text Area 2" onChange={(e)=>{
          this.setState({number:e.target.value})
        }}></Input>
        <p>{this.state.number}</p>
        <Button style={{margin:"20px 20px"}} onClick={()=>{alert("Button1 clicked")}}>Buton 1</Button>
        <Button style={{margin:"20px 20px"}} onClick={()=>{alert("Button2 clicked")}}>Buton 2</Button>
        <Button style={{margin:"20px 20px"}} onClick={()=>{alert("Button3 clicked")}}>Buton 3</Button>
      </div>
    );
  }
}
