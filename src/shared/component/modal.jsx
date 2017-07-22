// @flow

import React from 'react'

type Props = {
  title: string,
  children: Object,
}

const Modal = ({ title, children }: Props) =>
  (
    <div className="js-modal modal fade" tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal">×</button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  )

export default Modal
