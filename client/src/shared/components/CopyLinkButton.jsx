import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { copyToClipboard } from 'shared/utils/browser';
import { Button } from 'shared/components';

const CopyLinkButton = ({ ...buttonProps }) => {
  const { t } = useTranslation();
  const [isLinkCopied, setLinkCopied] = useState(false);

  const handleLinkCopy = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
    copyToClipboard(window.location.href);
  };

  return (
    <Button icon="link" onClick={handleLinkCopy} {...buttonProps}>
      {isLinkCopied ? t('description.copied_link') : t('description.copy_link')}
    </Button>
  );
};

export default CopyLinkButton;
