import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import ImageZoom from 'react-native-image-pan-zoom';

const ZoomableImage = ({uri}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomIn = () => {
    setIsZoomed(true);
  };

  const handleZoomOut = () => {
    setIsZoomed(false);
  };

  if (isZoomed) {
    return (
      <TouchableOpacity onPress={handleZoomOut}>
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={Dimensions.get('window').width}
          imageHeight={Dimensions.get('window').height}
          enableSwipeDown={true}
          onSwipeDown={handleZoomOut}>
          <Image source={{uri}} style={{flex: 1}} resizeMode="contain" />
        </ImageZoom>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={handleZoomIn}>
      <Image
        source={{uri}}
        style={{width: 320, height: 300}}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ZoomableImage;

const styles = StyleSheet.create({});
