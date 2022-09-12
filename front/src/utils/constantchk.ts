export const constantChk: (val: string, checkValue: string[]) => boolean = (val, checkValue) => {
  let chk = checkValue.indexOf(val);
  if (chk === -1) return true;
  return false;
};
