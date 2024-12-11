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
