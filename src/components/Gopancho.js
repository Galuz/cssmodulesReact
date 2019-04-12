import React, { Component } from 'react';
import styles from '../styles/gopancho.module.css'

class Gopancho extends Component {
  render() {
    return (
      <div className={styles.gopancho}>
        <div>
          <h1 className={styles.text_center}>Go pancho form</h1>
          <input className={styles.form_styles} type="text" placeholder="Direccion de correo"/>
          <input className={styles.form_styles} type="text" placeholder="Informacion vehiculo"/>
          <input className={styles.form_styles} type="text" placeholder="Código postal"/>
          <input className={styles.form_styles} type="text" placeholder="Placas"/>
        </div>
      </div>
    );
  }
}

export default Gopancho;
