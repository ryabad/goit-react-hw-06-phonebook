export const getInitialState = () => {
  const localData = JSON.parse(localStorage.getItem('contactsData'));
  return { user: localData && localData.length > 0 ? localData : [] };
};
