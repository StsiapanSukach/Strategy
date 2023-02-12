import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import { useTranslation } from 'react-i18next';
import { InputDebounced, Modal, Button } from 'shared/components';
import i18n from '../../../../i18n';

import TrackingWidget from './TrackingWidget';
import { SectionTitle } from '../Styles';
import {
  TrackingLink,
  ModalContents,
  ModalTitle,
  Inputs,
  InputCont,
  InputLabel,
  Actions,
} from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  updateIssue: PropTypes.func.isRequired,
};

const ProjectBoardIssueDetailsEstimateTracking = ({ issue, updateIssue }) => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <SectionTitle>{t('description.planned_tracking')}</SectionTitle>
      {renderHourInput('estimate', issue, updateIssue)}

      <SectionTitle>{t('description.tracking')}</SectionTitle>
      <Modal
        testid="modal:tracking"
        width={400}
        renderLink={modal => (
          <TrackingLink onClick={modal.open}>
            <TrackingWidget issue={issue} />
          </TrackingLink>
        )}
        renderContent={modal => (
          <ModalContents>
            <ModalTitle>{t('description.tracking')}</ModalTitle>
            <TrackingWidget issue={issue} />
            <Inputs>
              <InputCont>
                <InputLabel>{t('description.spent_tracking')}</InputLabel>
                {renderHourInput('timeSpent', issue, updateIssue)}
              </InputCont>
              <InputCont>
                <InputLabel>{t('description.remain_tracking')}</InputLabel>
                {renderHourInput('timeRemaining', issue, updateIssue)}
              </InputCont>
            </Inputs>
            <Actions>
              <Button variant="primary" onClick={modal.close}>
                {t('description.done')}
              </Button>
            </Actions>
          </ModalContents>
        )}
      />
    </Fragment>
  );
};

const renderHourInput = (fieldName, issue, updateIssue) => {
  return (
    <InputDebounced
      placeholder={i18n.t('description.number')}
      filter={/^\d{0,6}$/}
      value={isNil(issue[fieldName]) ? '' : issue[fieldName]}
      onChange={stringValue => {
        const value = stringValue.trim() ? Number(stringValue) : null;
        updateIssue({ [fieldName]: value });
      }}
    />
  );
};

ProjectBoardIssueDetailsEstimateTracking.propTypes = propTypes;

export default ProjectBoardIssueDetailsEstimateTracking;
