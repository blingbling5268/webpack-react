import React, { useState } from 'react';
import './index.scss';
import { Input, Select, DatePicker, Radio, Checkbox } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import moment from 'moment';

const Subgroup = () => {
  const { Option } = Select;
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const [value, setValue] = useState(1);

  /**
   * @description: 拖拽事件
   * @param {}
   * @author: liubo
   * @date: 2021-09-02 11:24:58
   */
  const drag = (e: React.DragEvent<HTMLDivElement>): void => {
    console.log('onDragStart', e);
    const dataset: any = (e.target as unknown as HTMLDivElement).dataset;
    e.dataTransfer.setData('type', dataset.type);
  };
  return (
    <div className='form-left'>
      <span className='form-left-title'>组件库</span>
      <div className='sub' data-type='input' draggable='true' onDragStart={drag}>
        <Input placeholder='Basic usage' className='sub-input' />
      </div>
      <div className='sub' data-type='select' draggable='true' onDragStart={drag}>
        <Select defaultValue='lucy' style={{ width: 120 }} className='sub-select'>
          <Option value='jack'>Jack</Option>
          <Option value='lucy'>Lucy</Option>
          <Option value='Yiminghe'>yiminghe</Option>
        </Select>
      </div>
      <div className='sub' data-type='time' draggable='true' onDragStart={drag}>
        <DatePicker className='sub-time' />
      </div>
      <div className='sub' data-type='radio' draggable='true' onDragStart={drag}>
        <Radio.Group value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
      <div className='sub' data-type='checkbox' draggable='true' onDragStart={drag}>
        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
      </div>
    </div>
  );
};

export default Subgroup;
