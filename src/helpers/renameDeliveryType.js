const renameDeliveryType = (item) => {
  const newItem = item;
  switch (newItem.type) {
    case 'Pickup':
      newItem.deliveryType = 'Самовывоз';
      break;
    case 'Delivery':
      newItem.deliveryType = 'Курьерская доставка';
      break;
    case 'Pick-point':
      newItem.deliveryType = 'Доставка в пункт выдачи';
      break;
    default:
      newItem.deliveryType = item.type;
  }
  return newItem;
};

export default renameDeliveryType;
