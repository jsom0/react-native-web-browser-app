import React, {memo} from 'react';
import {View, Text} from 'react-native';

const Blog = ({webView}) => {
  console.log('========This is Blog1=======');
  return <>{webView}</>;
};

export default memo(Blog);
