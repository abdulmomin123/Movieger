import { FlattenSimpleInterpolation } from 'styled-components';
import { SIZES } from './constants';
import { Size } from './Types';

export const createMediaQuery = (
  size: Size,
  css: FlattenSimpleInterpolation,
  type: 'max-width' | 'min-width' = 'max-width'
) => `@media only screen and (${type}: ${SIZES[size]}) {${css}}`;
