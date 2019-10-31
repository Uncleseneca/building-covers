import createDecorator from 'final-form-calculate';

export const decorator = createDecorator(
  {
    field: 'objectType',
    updates: { system: () => null },
  },
  {
    field: 'system',
    updates: { plants: () => [] },
  },
);
