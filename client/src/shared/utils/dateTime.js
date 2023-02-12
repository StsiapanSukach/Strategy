import moment from 'moment';
import i18n from '../../i18n';

const secondLang = i18n.language === 'ru' ? 'ru' : 'en';

moment.locale(secondLang);

export const formatDate = (date, format = 'MMMM D, YYYY') =>
  date ? moment(date).format(format) : date;

export const formatDateTime = (date, format = 'MMMM D, YYYY, h:mm A') =>
  date ? moment(date).format(format) : date;

export const formatDateTimeForAPI = date =>
  date
    ? moment(date)
        .utc()
        .format()
    : date;

export const formatDateTimeConversational = date => (date ? moment(date).fromNow() : date);
