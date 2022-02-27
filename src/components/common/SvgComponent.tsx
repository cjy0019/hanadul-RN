import React from 'react';
import {SvgXml} from 'react-native-svg';

const SvgComponent: React.FC<{
  xml: string;
  height?: string;
  width?: string;
}> = ({xml, height, width}) => {
  return <SvgXml xml={xml} height={height} width={width} />;
};

export default SvgComponent;
