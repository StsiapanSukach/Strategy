import i18n from '../../i18n';

export const ProjectCategory = {
  SOFTWARE: 'software',
  MARKETING: 'marketing',
  BUSINESS: 'business',
};

export const ProjectCategoryCopy = {
  [ProjectCategory.SOFTWARE]: i18n.t('sidebar.Software'),
  [ProjectCategory.MARKETING]: i18n.t('sidebar.Marketing'),
  [ProjectCategory.BUSINESS]: i18n.t('sidebar.Business'),
};
