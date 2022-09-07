const filterTableDataToDeliveryType = (data, filter) => (filter !== 'all'
  ? data.filter((item) => item.type === filter) : data);

export default filterTableDataToDeliveryType;
