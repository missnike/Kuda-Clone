import {Dimensions} from 'react-native';
// import themes from '../../assets/themes'
const {width, height} = Dimensions.get('window');

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const COLORS = {
  black: '#000',
  white: '#fff',
};

export const SIZES = {
  //global sizes
  base: screenHeight * 0.01,
  font: screenHeight * 0.0175,
  radius: 5,
  padding: screenHeight * 0.03,

  // font sizes
  navTitle: screenHeight * 0.04375,
  h1: screenHeight * 0.0375,
  h2: screenHeight * 0.0275,
  h2a: screenHeight * 0.034,
  h2c: screenHeight * 0.0245,
  h3: screenHeight * 0.0225,
  h3a: screenHeight * 0.0235,
  h4: screenHeight * 0.0175,
  h5: screenHeight * 0.015,
  body1: screenHeight * 0.0355,
  body2: screenHeight * 0.025,
  body3: screenHeight * 0.02,
  body3a: screenHeight * 0.02,
  body3b: screenHeight * 0.022,
  body4: screenHeight * 0.0175,
  body5: screenHeight * 0.015,
  body6: screenHeight * 0.01,
  intro: screenHeight * 0.04,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  navTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.navTitle,
  },
  largeTitleBold: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.h1 * 1.5,
    lineHeight: screenHeight * 0.05,
  },
  h1: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h1,
    lineHeight: screenHeight * 0.05,
  },
  h2: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h2,
    lineHeight: screenHeight * 0.0375,
  },
  h3: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h3,
    lineHeight: screenHeight * 0.025,
  },
  h3a: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h3a,
    lineHeight: screenHeight * 0.025,
  },
  h4: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h4,
    lineHeight: screenHeight * 0.025,
  },
  h5: {
    fontFamily: 'Roboto-Black',
    fontSize: SIZES.h5,
    lineHeight: screenHeight * 0.025,
  },
  body: {
    fontFamily: 'Roboto-Medium',
    fontSize: SIZES.body1 * 1.2,
    lineHeight: 39,
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body2a: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2 * 0.95,
    lineHeight: 30,
  },
  body2b: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2 * 0.935,
    lineHeight: 30,
  },
  body2c: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2 * 1.3,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3 * 1.05,
    lineHeight: 22,
  },
  body3a: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3a,
    lineHeight: 22,
  },
  body3b: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3b,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  body6: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body6,
    lineHeight: 22,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
