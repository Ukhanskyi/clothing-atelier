import { MAN, WOMAN } from '../types';
import { standardSizes } from '../constants';

export default function (gender, actualValue) {
  if (gender !== MAN && gender !== WOMAN) return null;
  if (Number.isNaN(actualValue) || actualValue < 0) return null;

  if (gender === MAN) {
    for (let i = 0; i < standardSizes.manClothes.length; i++) {
      if (standardSizes.manClothes[i] - actualValue >= 0) return standardSizes.letters[i];
    }
  } else {
    for (let i = 0; i < standardSizes.womanClothes.length; i++) {
      for (let i = 0; i < standardSizes.womanClothes.length; i++) {
        if (standardSizes.womanClothes[i] - actualValue >= 0) return standardSizes.letters[i];
      }
    }
  }

  return null;
}
