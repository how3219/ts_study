import React, { memo } from 'react';
import Toast from '@ui/Toast';
interface NotificationTypes {
  showMessage: boolean;
  warning?: boolean;
  message: string;
}
const Notification: ({ showMessage, warning, message }: NotificationTypes) => JSX.Element = (props) => {
  const { showMessage, message, warning = false } = props;
  if (showMessage) {
    if (!message) {
      throw new Error('Notification message parameter error');
    }
  }
  return showMessage ? <Toast message={message} warning={warning} /> : <></>;
};

export default memo(Notification);
