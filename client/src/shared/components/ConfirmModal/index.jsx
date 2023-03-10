import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import i18n from '../../../i18n';

import { StyledConfirmModal, Title, Message, Actions, StyledButton } from './Styles';

const propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'danger']),
  title: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  renderLink: PropTypes.func.isRequired,
};

const defaultProps = {
  className: undefined,
  variant: 'primary',
  title: i18n.t('description.warning'),
  message: i18n.t('description.action_confirmation'),
  confirmText: i18n.t('description.confirm'),
  cancelText: i18n.t('description.cancel'),
};

const ConfirmModal = ({
  className,
  variant,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  renderLink,
}) => {
  const [isWorking, setWorking] = useState(false);

  const handleConfirm = modal => {
    setWorking(true);
    onConfirm({
      close: () => {
        modal.close();
        setWorking(false);
      },
    });
  };

  return (
    <StyledConfirmModal
      className={className}
      testid="modal:confirm"
      withCloseIcon={false}
      renderLink={renderLink}
      renderContent={modal => (
        <Fragment>
          <Title>{title}</Title>
          {message && <Message>{message}</Message>}
          <Actions>
            <StyledButton
              variant={variant}
              isWorking={isWorking}
              onClick={() => handleConfirm(modal)}
            >
              {confirmText}
            </StyledButton>
            <StyledButton hollow onClick={modal.close}>
              {cancelText}
            </StyledButton>
          </Actions>
        </Fragment>
      )}
    />
  );
};

ConfirmModal.propTypes = propTypes;
ConfirmModal.defaultProps = defaultProps;

export default ConfirmModal;
