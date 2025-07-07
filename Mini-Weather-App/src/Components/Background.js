const getBackgroundColor = (temp) => {
  if (temp < 0)
    return 'linear-gradient(to bottom right, #dbeafe, #93c5fd)';
  if (temp < 15)
    return 'linear-gradient(to bottom right, #e0f2fe, #bae6fd)';
  if (temp < 25)
    return 'linear-gradient(to bottom right, #fefce8, #fde68a)';
  if (temp < 35)
    return 'linear-gradient(to bottom right, #fff7ed, #fdba74)';
  else{
    return 'linear-gradient(to bottom right, #fee2e2, #fca5a5)';
  }
};


export {getBackgroundColor};