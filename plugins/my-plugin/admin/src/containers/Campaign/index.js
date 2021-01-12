import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import {
  request
} from "strapi-helper-plugin";
import Input from '../../components/Input';
import DynamicDiv from '../../components/DynamicDiv';
import styled from 'styled-components';

const Wrapper = styled(DynamicDiv)``;

const Campaign = () => {
  const [code, setCode] = useState('');
  const [campaignList, setCampaignList] = useState([]);

  const getCampaignList = async () => {
    const res = await request('/my-plugin/campaign', {
      method: 'GET',
    });

    await setCampaignList(res);
    return res;
  };

  useEffect(() => {
    getCampaignList();
  }, []);

  const handleOnAddCampaign = async () => {
    if(!code) return strapi.notification.error('Please enter campaign code');

    const res = await request('/my-plugin/campaign', {
      method: 'POST',
      body: {
        campaign_code: code
      }
    });

    setCode("");

    getCampaignList();
  };

  return (
    <Wrapper mPadding={'20px'}>
      <div style={{ display: 'flex' }}>
        <Input value={code} onChange={e => setCode(e.target.value)} />
        <Button label={'add'} onClick={handleOnAddCampaign} mMarginLeft={"15px"}/>
      </div>
      {campaignList.map(o => <div>{o.campaign_code}</div>)}
    </Wrapper>
  );
};

export default Campaign;