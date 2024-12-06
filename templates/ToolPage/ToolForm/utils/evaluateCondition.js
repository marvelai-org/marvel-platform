/**
 * Evaluate a condition object against a set of values.
 *
 * @param {Object} condition the condition object
 * @param {Object} values the values to evaluate against
 * @param {boolean} [debug=false] whether to log debug information
 * @returns {boolean} whether the condition evaluates to true
 *
 * Condition format:
 * {
 *   or: [{ field: string, operator: string, value: any }, ...],
 *   and: [{ field: string, operator: string, value: any }, ...]
 * }
 *
 * Operators:
 * - 'equals': whether the field value equals the given value
 * - 'notEmpty': whether the field value is not empty
 * - 'greaterThan': whether the field value is greater than the given value
 */
const evaluateCondition = (condition, values, debug = false) => {
  if (!condition) return true; // No condition means always show

  const evaluate = (cond) => {
    const { field, operator, value } = cond;
    const fieldValue = values[field];

    if (debug)
      // eslint-disable-next-line no-console
      console.log('fieldValue', fieldValue, 'operator', operator);

    switch (operator) {
      case 'equals':
        if (debug)
          // eslint-disable-next-line no-console
          console.log('equals', fieldValue === value);

        return fieldValue === value;
      case 'notEmpty':
        if (debug)
          // eslint-disable-next-line no-console
          console.log('notEmpty', fieldValue && fieldValue.trim() !== '');

        return fieldValue && fieldValue.trim() !== '';
      case 'greaterThan':
        if (debug)
          // eslint-disable-next-line no-console
          console.log('greaterThan', parseInt(fieldValue, 10) > value);

        return parseInt(fieldValue, 10) > value;
      default:
        return false;
    }
  };

  if (condition.and) {
    return condition.and.every(evaluate);
  }

  if (condition.or) {
    return condition.or.some(evaluate);
  }

  return false;
};

export default evaluateCondition;
