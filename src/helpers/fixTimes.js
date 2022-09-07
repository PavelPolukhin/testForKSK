import moment from 'moment';

const fixTimes = (item) => {
  const parseDate = new Date(item?.creationDate).getTime() / 1000;
  const newItem = item;
  newItem.creationDate = moment.unix(parseDate).format('DD.MM.YYYY HH:mm:ss');
  return newItem;
};

export default fixTimes;
