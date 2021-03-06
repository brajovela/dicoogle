var Reflux = require('reflux');
var ServiceAction = exports;
ServiceAction.getStorage = Reflux.createAction();
ServiceAction.getQuery = Reflux.createAction();
ServiceAction.setStorage = Reflux.createAction();
ServiceAction.setQuery = Reflux.createAction();
ServiceAction.setStorageAutostart = Reflux.createAction();
ServiceAction.setQueryAutostart = Reflux.createAction();

ServiceAction.getQuerySettings = Reflux.createAction();
ServiceAction.saveQuerySettings = Reflux.createAction();

export default ServiceAction;
