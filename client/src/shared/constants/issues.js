import i18n from '../../i18n';

export const IssueType = {
  TASK: 'task',
  BUG: 'bug',
  STORY: 'story',
};

export const IssueStatus = {
  BACKLOG: 'backlog',
  SELECTED: 'selected',
  INPROGRESS: 'inprogress',
  DONE: 'done',
};

export const IssuePriority = {
  HIGHEST: '5',
  HIGH: '4',
  MEDIUM: '3',
  LOW: '2',
  LOWEST: '1',
};

export const IssueTypeCopy = {
  [IssueType.TASK]: i18n.t('entities.task'),
  [IssueType.BUG]: i18n.t('entities.bug'),
  [IssueType.STORY]: i18n.t('entities.story'),
};

export const IssueStatusCopy = {
  [IssueStatus.BACKLOG]: i18n.t('entities.backlog'),
  [IssueStatus.SELECTED]: i18n.t('entities.selected'),
  [IssueStatus.INPROGRESS]: i18n.t('entities.in_progress'),
  [IssueStatus.DONE]: i18n.t('entities.done'),
};

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: i18n.t('entities.highest'),
  [IssuePriority.HIGH]: i18n.t('entities.high'),
  [IssuePriority.MEDIUM]: i18n.t('entities.medium'),
  [IssuePriority.LOW]: i18n.t('entities.low'),
  [IssuePriority.LOWEST]: i18n.t('entities.lowest'),
};
