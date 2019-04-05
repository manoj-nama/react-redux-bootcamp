import {applyMiddleware} from 'redux'

import asyncMiddleware from './async.mw';
import logger from './logger.mw';

export default applyMiddleware(asyncMiddleware, logger);