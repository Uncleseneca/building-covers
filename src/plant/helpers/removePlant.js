// @ts-check

import { PLANTS } from '../../api/dictionaries';
import { firestore } from '../../api/firebase';

export const removePlant = id =>
  firestore
    .collection(PLANTS)
    .doc(id)
    .delete();
