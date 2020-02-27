/**
 * @module api/Client
 * @category API
 * @description Module exporting an instance of the NHSTA class.
 *
 * > - For more information, see the documentation for the [NHTSA](module-api_NHTSA-NHTSA.html) class.
 */

import { NHTSA } from './NHTSA';

/**
 * A new instance of the [NHTSA](module-api_NHTSA-NHTSA.html) class.
 *
 * @type {NHTSA}
 */
const Client: NHTSA = new NHTSA();

export { Client };