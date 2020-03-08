var moment = require('moment');

export const convertDate = (date) => {
  if (!date) { return; }
  return moment(date, 'YYYY-MM-DD', true).isValid() ? moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY'): date;
};
