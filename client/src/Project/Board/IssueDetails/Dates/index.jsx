import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { formatDateTimeConversational } from 'shared/utils/dateTime';

import { Dates } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const ProjectBoardIssueDetailsDates = ({ issue }) => {
  const { t } = useTranslation();

  return (
    <Dates>
      <div>
        {t('description.created_at')} {formatDateTimeConversational(issue.createdAt)}
      </div>
      <div>
        {t('description.updated_at')} {formatDateTimeConversational(issue.updatedAt)}
      </div>
    </Dates>
  );
};

ProjectBoardIssueDetailsDates.propTypes = propTypes;

export default ProjectBoardIssueDetailsDates;
