import React from "react";
import PropTypes from 'prop-types';
import css from "../Notification/Notification.module.css";

export const Notification = ({ message }) => {
    return message && <p className={css.message}>{message}</p>;
}

Notification.propTypes = {
    message: PropTypes.string,
}