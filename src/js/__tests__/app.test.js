import healthIndicator from '../app';

test.each([
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 40 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
])(
  ('should show health string'),
  (input, expected) => {
    const result = healthIndicator(input);
    expect(result).toBe(expected);
  },
);
