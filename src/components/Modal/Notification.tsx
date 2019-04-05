import React, { FC } from 'react';
// @ts-ignore
import { InlineNotification } from 'carbon-components-react';
import './styles.scss';

interface INotification {
  msg: any;
}

export const Notification: FC<INotification> = props => {
  const { msg } = props;
  return (
    <InlineNotification
      title={msg.title}
      subtitle={msg.subtitle}
      caption=""
      kind={msg.kind}
      className="toast-style"
      hideCloseButton={true}
    />
  );
};
