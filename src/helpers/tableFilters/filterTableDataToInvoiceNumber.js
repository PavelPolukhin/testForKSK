const filterTableDataToInvoiceNumber = (data, filter) => {
  const lowerString = filter.toLowerCase();
  return filter ? data.filter((item) => {
    const lowerNumber = item.number.toString().toLowerCase();
    return lowerNumber.indexOf(lowerString) > -1 ? item : '';
  }) : data;
};

export default filterTableDataToInvoiceNumber;
