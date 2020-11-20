export const getCurrentDateTime = (): string => {
  const today = new Date();
  const dateSeperator = '/';
  const timeSeperator = ':';
  const date = (today.getMonth() + 1) + dateSeperator + today.getDate()
  + dateSeperator + today.getFullYear();
  const time = today.getHours() + timeSeperator + today.getMinutes()
  + timeSeperator + today.getSeconds();
  return `${time} ${date}`;
};

export const clearLocalStorage = (key:string):void => {
  localStorage.removeItem(key);
};
