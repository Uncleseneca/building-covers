// @ts-check

import { PLANTS } from '../api/doc-types';
import { firestore } from '../api/firebase';

export const removePlant = id =>
  firestore
    .collection(PLANTS)
    .doc(id)
    .delete();
