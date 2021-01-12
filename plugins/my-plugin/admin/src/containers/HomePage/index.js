/*
 *
 * HomePage
 *
 */

import React, { memo, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import Text from '../../components/Text';
import Button from '../../components/Button';
import DynamicDiv from '../../components/DynamicDiv';
import colors from '../../config/colors';
import {
  request
} from "strapi-helper-plugin";

const HomePage = () => {
  const [promoList, setPromoList] = useState([]);

  useEffect(() => {
    const getPromoList = async () => {
      const res = await request('/my-plugin/promo', { method: 'GET' });
      // const test = await strapi.query('promo')
      // console.log('st', test, res)
      return res;
    };

    getPromoList();
  }, []);

  return (
    <DynamicDiv mPadding={"20px"}>
      <Text fontWeight={"500"} mMarginTop={"10px"} mMarginBottom={"10px"}>Promotion Code</Text>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button colors={colors.white1} label={"Add Promo"} />
      </div>


      <p>List</p>
    </DynamicDiv>
  );
};

export default memo(HomePage);
